import express from 'express';

/**
 * Status Controller
 * @interface
 */
interface IStatusController {
  getStatus(req: express.Request, res: express.Response): void;
}

/**
 * statusController.
 *
 * @returns {Object}
 */
const statusController: IStatusController = {
  /**
   * Returns the status
   */
  getStatus: (req: express.Request, res: express.Response): void => {
    res.send({
      status: 'ok'
    });
  }
};

export default statusController;
