import express from 'express';

import routes from './components/v1/routers';

const app = express();

app.use(express.json());

app.use('/api/v1/', routes);

export default app;
