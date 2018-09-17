import { Request, Response } from 'express';
import { Options } from 'morgan';
import logger from './winston';
/**
 * Stream logger.
 */
export const loggerStream: Options = {
  skip: (req: Request, res: Response): boolean => res.statusCode < 400,
  stream: {
    write: (message: string) => logger.info(message)
  }
};
