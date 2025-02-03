
import express, { Express, Request, Response, ErrorRequestHandler, NextFunction } from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { register, Counter } from 'prom-client';

const middleware = require('./controllers/middleware');
const userController = require('./controllers/userController');
const cookieController = require('./controllers/cookieController');
const sessionController = require('./controllers/sessionController');

const app: Express = express();
const cors = require('cors');
const PORT: number = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();

const zeusCounter = new Counter({
    name: 'zeus_counter',
    help: 'Counter for zeus',
    labelNames: ['zeus'],
});
zeusCounter.inc();

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.post('/login', 
    userController.getUser, 
    sessionController.setUserSession, 
    async (req: Request, res: Response) => {
        console.log('Login is working...');
        res.status(200).json(res.locals.foundUser);
    }
);

app.post('/register', 
    userController.checkForUser, 
    userController.createUser, 
    async (req: Request, res: Response) => {
        res.status(200).json(res.locals.newUser);
    }
);

app.get('/metrics', async (req: Request, res: Response) => {
    res.setHeader('Content-Type', register.contentType);
    res.end(await register.metrics());
});

app.get('/apis/metrics.k8s.io/v1beta1', async (req: Request, res: Response) => {
    console.log('Getting metrics resources is working...');
    res.status(200).json({ metrics: 'metrics' });
});

app.get('/apis/metrics.k8s.io/v1beta1/nodes', async (req: Request, res: Response) => {
    try {
        const kubeMetrics = await fetch('http://localhost:8085/metrics');
        console.log(kubeMetrics);
        res.status(200).json({ metrics: kubeMetrics });
    } catch (err) {
        res.status(500).json({ error: err instanceof Error ? err.message : 'Unknown error' });
    }
});

app.get('/cluster', 
    middleware.getClusterInfo, 
    async (req: Request, res: Response) => {
        res.status(200).json(res.locals.clusterInfo);
    }
);

app.get('/health', 
    middleware.getHealth, 
    async (req: Request, res: Response) => {
        res.status(200).json(res.locals.health);
    }
);

app.use('*', (req: Request, res: Response) => {
    res.status(404).send('Not Found');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    const defaultError = {
        log: 'Express error handler triggered',
        status: 500,
        message: { err: `${err}: An error occurred` },
    };
    const errorObj = { ...defaultError, ...err };
    console.log(errorObj.log);
    res.status(errorObj.status).json(errorObj.message);
});

const server = app.listen(PORT, () => {
    console.log(`************************* EXPRESS server is listening on http://localhost:${PORT}/`);
    console.log(`************************* Frontend listening on  http://localhost:${8080}/`);
});

module.exports = server;