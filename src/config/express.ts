import express from 'express';
import routes from './../modules';

const app: express.Application = express();

app.use('/', routes);

export default app;
