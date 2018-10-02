"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston = require("winston");
const LEVELS = {
    INFO: 'info',
    DEBUG: 'debug'
};
const options = {
    file: {
        level: LEVELS.INFO,
        filename: './logs/app.log',
        handleExceptions: true,
        json: false,
        maxsize: 5242880,
        maxFiles: 5,
        colorize: false
    },
    console: {
        level: LEVELS.DEBUG,
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.combine(winston.format.splat(), winston.format.simple())
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
exports.default = logger;
//# sourceMappingURL=winston.js.map