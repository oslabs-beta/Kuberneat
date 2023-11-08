//import express
import express, { Express, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import next from 'next';
import path from 'path';
import dotenv from 'dotenv';
import { RequestHandler } from 'express';
import { register, Counter } from 'prom-client';

const middleware = require('./controllers/middleware');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app: Express = express();
const cors = require('cors');
const PORT: number = 3002;

//using next.js to run node.js
const dev: boolean = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir:'./' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  app.get('*', (req: Request, res: Response) => {
    return handle(req, res);
  });
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(cors() as RequestHandler);
dotenv.config();

//collecting our default metrics from Prometheus and call it here 
const zeusCounter = new Counter({
	name: 'zeus_counter',
	help: 'Counter for zeus',
	labelNames: ['zeus'],
});
zeusCounter.inc();


app.get('/', (req: Request, res: Response) => {
	console.log('Backend & Frontend speaking...');
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

//login page
//cookieController.setUserCookie 
app.post('/login', userController.getUser, sessionController.setUserSession, (req: Request, res: Response) => {
	console.log('Login is working...');
	return res.status(200).json(res.locals.foundUser);
});

//register page
app.post('/register', userController.checkForUser, userController.createUser, (req: Request, res: Response) => {
	return res.status(200).json(res.locals.newUser);
});

//this route handler works to get the metrics
app.get('/metrics', async (req: Request, res: Response) => {
	console.log('Getting metrics is working...');
	res.setHeader('Content-type', register.contentType);
	res.end(await register.metrics());
});

//this route handler is to get more metrics not shown on grafana -Need more refining
app.get('/apis/metrics.k8s.io/v1beta1', async (req: Request, res: Response) => {
	console.log('Getting metrics resources is working...');
	res.sendStatus(200).send(JSON.stringify({ metrics: 'metrics' }));
});

//this route handler is to get more metrics not shown on grafana
app.get('/apis/metrics.k8s.io/v1beta1/nodes', async (req: Request, res: Response) => {
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
app.get('/cluster', middleware.getClusterInfo, (req: Request, res: Response) => {
	// console.log('Getting cluster is working...');
	return res.status(200).json(res.locals.clusterInfo);
});

//this route handler is to get metrics via CLI for health metrics
app.get('/health', middleware.getHealth, (req: Request, res: Response) => {
	// console.log('Getting health is working...');
	return res.status(200).json(res.locals.health);
});

//catch all
app.use('*', (req, res) => {
	return res.status(404);
});

//global error handler 
app.use((err: ErrorRequestHandler, req: Request, res: Response, next: NextFunction) => {
	const defaultError = {
		log: 'express error handler triggered',
		status: 500,
		message: { err: `${err}: An error occurred` },
	};
	const errorObj = Object.assign({}, defaultError, err);
	console.log(errorObj.log);
	return res.status(errorObj.status).json(errorObj.message);
});

//const serverPort = process.env.SERVER_PORT;
const server = app.listen(PORT, () => {
	console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
	console.log(`************************* Frontend listening on  http://localhost:${3000}/`);
});


module.exports = server; 

