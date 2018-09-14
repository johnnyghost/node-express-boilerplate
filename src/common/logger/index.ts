import winston from 'winston';
import { Options } from 'morgan';

const options = {
  file: {
    level: 'info',
    filename: './logs/app.log',
    handleExceptions: true,
    json: true,
    maxsize: 5242880, //5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

// Keep it simple to focus on the need first
// I think Logger should send logs to a logger service
const logger = winston.createLogger({
  exitOnError: false,
  level: 'info',
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'app.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple()
    })
  );
}

export const loggerStream: Options = {
  stream: {
    write: function(message: string) {
      logger.info(message);
    }
  }
};

export default logger;
