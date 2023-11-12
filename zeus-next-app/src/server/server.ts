import next from 'next';
import express, { Express, Request, Response,  RequestHandler, ErrorRequestHandler, NextFunction} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { register, Counter } from 'prom-client';

const cors = require('cors');
const PORT: number = 3002;

const middleware = require('./controllers/middleware');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const dev = process.env.NODE_ENV !== 'production';
const ExpressAppServer = next({ dev });
const handle = ExpressAppServer.getRequestHandler();


ExpressAppServer.prepare().then(() => {
  const server = express();

	server.use(express.json() as RequestHandler);
	server.use(express.urlencoded({ extended: true }) as RequestHandler);
	server.use(cors() as RequestHandler);
	dotenv.config();
	
	const zeusCounter = new Counter({
	name: 'zeus_counter',
	help: 'Counter for zeus',
	labelNames: ['zeus'],
	});
	zeusCounter.inc();

	//connect frontend and backend
	server.get('/', (req: Request, res: Response) => {
		console.log('Backend & Frontend speaking...');
		//connect frontend and backend
		return ExpressAppServer.render(req, res, '/');
		// return res.sendFile(path.join(__dirname, '/'));
	});

	server.post('/login', userController.getUser, sessionController.setUserSession, (req: Request, res: Response) => {
	console.log('Login is working...');
	return res.status(200).json(res.locals.foundUser);
	});
	// //register page
	server.post('/register', userController.checkForUser, userController.createUser, (req: Request, res: Response) => {
		return res.status(200).json(res.locals.newUser);
	});

	//this route handler works to get the metrics
	server.get('/metrics', async (req: Request, res: Response) => {
		console.log('Getting metrics is working...');
		res.setHeader('Content-type', register.contentType);
		res.end(await register.metrics());
	});

	//this route handler is to get more metrics not shown on grafana -Need more refining
	server.get('/apis/metrics.k8s.io/v1beta1', async (req: Request, res: Response) => {
		console.log('Getting metrics resources is working...');
		res.sendStatus(200).send(JSON.stringify({ metrics: 'metrics' }));
	});

	//this route handler is to get more metrics not shown on grafana
	server.get('/apis/metrics.k8s.io/v1beta1/nodes', async (req: Request, res: Response) => {
		try {
			//fetching data from local host 8085 (look into kubectl proxy)
			//kubectl port-forward svc/prometheus-kube-state-metrics 8085:8080 
			const kubeMetrics = await fetch('http://localhost:8085/metrics');
			console.log(kubeMetrics);
			res.sendStatus(200).send(JSON.stringify({ metrics: kubeMetrics }));
		} catch (err) {
			console.log(err);
		}
	});

	//this route handler is to get metrics via CLI
	server.get('/cluster', middleware.getClusterInfo, (req: Request, res: Response) => {
		// console.log('Getting cluster is working...');
		return res.status(200).json(res.locals.clusterInfo);
	});

	//this route handler is to get metrics via CLI for health metrics
	server.get('/health', middleware.getHealth, (req: Request, res: Response) => {
		// console.log('Getting health is working...');
		return res.status(200).json(res.locals.health);
	});

  // Handle all Next.js requests
  server.all('*', (req, res) => {
    return res.status(404);
  });

	server.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
		const defaultError = {
			log: 'express error handler triggered',
			status: 500,
			message: { err: `${err}: An error occurred` },
		};
		const errorObj = Object.assign({}, defaultError, err);
		console.log(errorObj.log);
		return res.status(errorObj.status).json(errorObj.message);
	});

  // Start the server
  server.listen(PORT, () => {
		console.log('🚄 ------>Express server is running on http://localhost:3002/');
  });
});

module.exports = ExpressAppServer; 




