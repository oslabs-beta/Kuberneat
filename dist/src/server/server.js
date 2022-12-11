"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
const middleware = require('./middleware');
const userController = require('./controllers/userController');
const prom_client_1 = __importDefault(require("prom-client"));
// import cluster from 'cluster';
const app = (0, express_1.default)();
const cors = require('cors');
const PORT = 3000;
//  const fetch = require('node-fetch');
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(cors());
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
//server the frontend
app.get('/', (req, res) => {
    console.log('Backend & Frontend speaking...');
    res.sendFile(path_1.default.join(__dirname, '../client/index.html'));
});
//login page
app.post('/login', userController.getUser, (req, res) => {
    console.log('Getting user is working...', res.locals.foundUser);
    //res.redirect to route, 
    return res.status(200).json(res.locals.foundUser);
});
//register page
app.post('/register', userController.checkForUser, userController.createUser, (req, res) => {
    return res.status(200).json(res.locals.newUser);
});
//this route handler works to get the metrics
app.get('/metrics', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Getting metrics is working...');
    res.setHeader('Content-type', register.contentType);
    res.end(yield register.metrics());
}));
//this route handler is to get more metrics not shown on grafana -Need more refining
app.get('/apis/metrics.k8s.io/v1beta1', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Getting metrics resources is working...');
    res.sendStatus(200);
}));
//this route handler is to get more metrics not shown on grafana -Need more refining
app.get('/apis/metrics.k8s.io/v1beta1/nodes', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //fetching data from local host 8085 (look into kubectl proxy)
        const kubeMetrics = yield fetch('http://localhost:8085/metrics');
        console.log(kubeMetrics);
        res.sendStatus(200).send(JSON.stringify({ metrics: kubeMetrics }));
    }
    catch (err) {
        console.log(err);
    }
}));
//this route handler is to get metrics via CLI
app.get('/cluster', middleware.getClusterInfo, (req, res) => {
    console.log('Getting cluster is working...', res.locals.clusterInfo);
    return res.status(200).json(res.locals.clusterInfo);
});
//this route handler is to get metrics via CLI for health metrics
app.get('/health', middleware.getHeath, (req, res) => {
    return res.status(200).json(res.locals.health);
});
//catch all
app.use('*', (req, res) => {
    return res.status(404);
});
//global error handler 
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
    console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
    console.log(`************************* Frontend listening on  http://localhost:${8080}/`);
});
