import { Request, Response } from 'express';
import winston, { format } from 'winston';
import { Options } from 'morgan';

const options = {
  file: {
    level: 'info',
    filename: './logs/app.log',
    handleExceptions: true,
    json: false,
    maxsize: 5242880,
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
    format: format.combine(format.splat(), format.simple())
  }
};

// Keep it simple to focus on the need first
// I think Logger should send logs to a logger service
const logger = winston.createLogger({
  exitOnError: false,
  level: 'info',
  transports: [
    new winston.transports.Console(options.console),
    new winston.transports.File(options.file)
  ]
});

/**
 * Stream logger.
 */
export const loggerStream: Options = {
  skip: (req: Request, res: Response): boolean => res.statusCode < 400,
  stream: {
    write: (message: string) => logger.info(message)
  }
};

export default logger;
