import express from 'express';

/**
 * Status Controller
 * @interface
 */
interface StatusController {
  getStatus: any;
}

/**
 * statusController.
 *
 * @returns {Object}
 */
const statusController: StatusController = {
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
