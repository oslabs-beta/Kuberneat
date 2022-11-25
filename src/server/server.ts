import express, {
	Express,
	Request,
	Response,
	NextFunction,
	ErrorRequestHandler,
} from 'express';
import dotenv from 'dotenv';
import { RequestHandler } from 'express-serve-static-core';
import path from 'path';
const client = require('prom-client');
const k8s = require('@kubernetes/client-node');
const helmet = require('helmet');
const frameguard = require('frameguard'); 

dotenv.config();

const app: Express = express();
const port: number = 3030; // Number(process.env.PORT) || 

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(helmet());
app.use(frameguard({ action: 'SAMEORIGIN' }))

const middleware = require('./middleware.ts');

// collecting our default metrics from Prometheus
// https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors
const collectDefaultMetrics = client.collectDefaultMetrics;
// register our metrics to another registry
const Registry = client.Registry;
const register = new Registry();
// collect our default metrics
collectDefaultMetrics({ register });

// label our metrics
register.setDefaultLabels({
	app: 'zeus-api',
});

// list all pods
const kc = new k8s.KubeConfig();
kc.loadFromDefault();

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);
k8sApi.listNamespacedPod('default').then((res: any) => {
	console.log(res.body);
});



app.get('/', async (req: Request, res: Response) => {
	return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// expose endpoint in '/metrics' path
app.get('/metrics', async (req: Request, res: Response) => {
	console.log('Getting metrics is working...')
	res.setHeader('Content-type', register.contentType);
	res.end(await register.metrics());
});

app.get('/dashboard', middleware.getDashboard, (req: Request, res: Response) => {
	console.log('get request to dashboard is sent')
	return res.send(200).json(res.locals.dashboard);
});

//Catch all
app.use('*', (req, res) => {
	return res.status(404);
});

//Global route handler
app.use(
	(
		err: ErrorRequestHandler,
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		const defaultError = {
			log: 'express error handler triggered',
			status: 500,
			message: { err: `${err}: An error occurred` },
		};
		const errorObj = Object.assign({}, defaultError, err);
		console.log(errorObj.log);
		return res.status(errorObj.status).json(errorObj.message);
	}
);

app.listen(port, () => {
	console.log(`Express server listening on port: ${port}...`);
});
