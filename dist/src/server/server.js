"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware_1 = require("./middleware");
const prom_client_1 = __importDefault(require("prom-client"));
// import cluster from 'cluster';
const app = (0, express_1.default)();
// const cors = require('cors');
const PORT = 3000; //Number(process.env.PORT) ||
//  const fetch = require('node-fetch');
// const child_process = require('child_process');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// app.use(cors() as RequestHandler);
dotenv_1.default.config();
// collecting our default metrics from Prometheus
// https://prometheus.io/docs/instrumenting/writing_clientlibs/#standard-and-runtime-collectors
const collectDefaultMetrics = prom_client_1.default.collectDefaultMetrics;
// register our metrics to another registry
const Registry = prom_client_1.default.Registry;
const register = new Registry();
// collect our default metrics
collectDefaultMetrics({ register });
// label our metrics
register.setDefaultLabels({
    app: 'zeus-api',
});
app.get('/', (req, res) => {
    console.log('Backend & Frontend speaking...');
    res.sendFile(path_1.default.join(__dirname, '../client/index.html'));
});
// app.get('/metrics', async (req: Request, res: Response) => {
// 	console.log('Getting metrics is working...');
// 	res.setHeader('Content-type', register.contentType);
// 	res.end(await register.metrics());
// });
app.get('/cluster', middleware_1.middleware.getClusterInfo, (req, res) => {
    console.log('Getting cluster is working...');
    res.status(200).json(res.locals.clusterInfo);
});
app.use('*', (req, res) => {
    return res.status(404);
});
app.use((err, req, res, next) => {
    const defaultError = {
        log: 'express error handler triggered',
        status: 500,
        message: { err: `${err}: An error occurred` },
    };
    const errorObj = Object.assign({}, defaultError, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, () => {
    console.log(`EXPRESS server is listening on http://localhost:${PORT}/`);
    console.log(`Frontend listening on  http://localhost:${8080}/`);
});
