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
	import client from 'prom-client';
  
  dotenv.config();
  
  const app: Express = express();
  const port: number = Number(process.env.PORT) || 3000;

	// collecting our default metrics from Prometheus
	// https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors
	const collectDefaultMetrics = client.collectDefaultMetrics;
	// register our metrics to another registry
	const Registry = client.Registry;
	const register = new Registry();
	// collect these default metrics
	collectDefaultMetrics({ register });
  

  app.use(express.json() as RequestHandler);
  app.use(express.urlencoded({ extended: true }) as RequestHandler);
  
  app.get('/', (req: Request, res: Response) => {
	console.log('backend and frontend are talking');
	return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
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
  
  app.listen(port, () => {
	console.log(`Express server listening on port: ${port}...`);
  });
  