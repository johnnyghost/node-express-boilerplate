import express, { Router } from 'express';
import statusController from './status.controller';

export default (router: Router): void => {
  /**
   * @api {get} status
   * @apiDescription Get the status
   * @apiVersion 1.0.0
   * @apiName Status
   */
  router.get('/status', statusController.getStatus);
};
