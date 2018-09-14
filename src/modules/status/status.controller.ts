import { JsonController, Get, Req, Res } from 'routing-controllers';

/**
 * StatusController
 * @apiVersion 1.0.0
 * @apiName Status
 */
@JsonController('/status')
class StatusController {
  /**
   * @api {get} status
   * @apiDescription Get the status
   * @returns {Promise<String>} Returns a resolved string
   */
  @Get('/')
  async get(@Req() request: any, @Res() response: any): Promise<any> {
    return response.send({ status: 'ok' });
  }
}

export default StatusController;
