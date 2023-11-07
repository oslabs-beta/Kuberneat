import {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import promClient from 'prom-client';

// collecting our default metrics from Prometheus
// https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors

const collectDefaultMetrics = promClient.collectDefaultMetrics;
// register our metrics to another registry
const Registry = promClient.Registry;

const register = new Registry();
// collect our default metrics
collectDefaultMetrics({ register });

promClient.collectDefaultMetrics({ prefix: 'zeus_api_' });
collectDefaultMetrics({ gcDurationBuckets: [0.1, 0.2, 0.3] });

// label our metrics
register.setDefaultLabels({
	app: 'zeus-api',
});

// define our metrics
const httpRequestDurationMicroseconds = new promClient.Histogram({
  name: 'http_request_duration_ms',
  help: 'Duration of HTTP requests in ms',
  labelNames: ['method', 'route', 'code'],
  buckets: [0.1, 5, 15, 50, 100, 200, 300, 400, 500], // buckets for response time from 0.1ms to 500ms
});
httpRequestDurationMicroseconds.labels('GET', '/', '200').observe(0.3);


// define our metrics
const httpRequestTotal = new promClient.Counter({
  name: 'http_request_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'code'],
});
httpRequestTotal.labels('GET', '/', '200').inc();
httpRequestTotal.labels('GET', '/', '400').inc();


// define our metrics
const httpRequestTotalByMethod = new promClient.Counter({
  name: 'http_request_total_by_method',
  help: 'Total number of HTTP requests by method',
  labelNames: ['method'],
});
httpRequestTotalByMethod.labels('GET').inc();
httpRequestTotalByMethod.labels('POST').inc();

// define our metrics
const httpRequestTotalByStatusCode = new promClient.Counter({
  name: 'http_request_total_by_status_code',
  help: 'Total number of HTTP requests by status code',
  labelNames: ['code'],
});
httpRequestTotalByStatusCode.labels('200').inc();
httpRequestTotalByStatusCode.labels('400').inc();

// define our metrics
const httpRequestTotalByRoute = new promClient.Counter({
  name: 'http_request_total_by_route',
  help: 'Total number of HTTP requests by route',
  labelNames: ['route'],
});
httpRequestTotalByRoute.labels('/').inc();
httpRequestTotalByRoute.labels('/login').inc();

// define our metrics
const httpRequestTotalByMethodAndRoute = new promClient.Counter({
  name: 'http_request_total_by_method_and_route',
  help: 'Total number of HTTP requests by method and route',
  labelNames: ['method', 'route'],
});



//return the metrics 
const getMetrics = async (req: Request, res: Response) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
};

// export our metrics
module.exports = {
  httpRequestDurationMicroseconds,
  httpRequestTotal,
  httpRequestTotalByMethod,
  httpRequestTotalByStatusCode,
  httpRequestTotalByRoute,
  httpRequestTotalByMethodAndRoute,
  getMetrics,
};
