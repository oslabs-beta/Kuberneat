import express, {
	Express,
	Request,
	Response,
	ErrorRequestHandler,
	NextFunction,
} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { RequestHandler } from 'express';
// import { middleware } from './middleware';
const middleware = require('./middleware');

import client from 'prom-client';
// import cluster from 'cluster';

const app: Express = express();
const cors = require('cors');
const PORT: number = 3000; //Number(process.env.PORT) ||
 const fetch = require('node-fetch');

// const child_process = require('child_process');

app.use(express.json() as RequestHandler);
app.use(express.urlencoded({ extended: true }) as RequestHandler);
app.use(cors() as RequestHandler);
dotenv.config();

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


app.get('/', (req: Request, res: Response) => {
	console.log('Backend & Frontend speaking...');
	res.sendFile(path.join(__dirname, '../client/index.html'));
});

// app.get('/metrics', async (req: Request, res: Response) => {
// 	console.log('Getting metrics is working...');
// 	res.setHeader('Content-type', register.contentType);
// 	res.end(await register.metrics());
// });

app.get('/cluster', middleware.getClusterInfo, (req: Request, res: Response) => {
	console.log('Getting cluster is working...', res.locals.clusterInfo);
	return res.status(200).json(res.locals.clusterInfo);
});

app.use('*', (req, res) => {
	return res.status(404);
});

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


app.listen(PORT, () => {
	console.log(`EXPRESS server is listening on http://localhost:${PORT}/`);
	console.log(`Frontend listening on  http://localhost:${8080}/`);
});



