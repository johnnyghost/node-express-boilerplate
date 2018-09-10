import express, { Router } from 'express';
import statusRouter from './status/status.router';

const router: Router = express.Router();

// create all the routes
statusRouter(router);

export default router;
