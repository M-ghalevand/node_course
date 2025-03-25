import express from 'express';
import { errorMiddleware } from 'middlewares';

import routes from './components/v1/routers';

const app = express();

app.use(express.json());

app.use('/api/v1/', routes);

app.use(errorMiddleware);

export default app;
