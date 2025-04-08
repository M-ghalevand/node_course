import express from 'express';
import { errorMiddleware } from 'middlewares';


import routes from './routes';

const app = express();

app.use(express.json());

app.use('/api', routes);

app.use(errorMiddleware);

export default app;
