"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("./winston");
/**
 * Stream logger.
 */
exports.loggerStream = {
    skip: (req, res) => res.statusCode < 400,
    stream: {
        write: (message) => winston_1.default.info(message)
    }
};
//# sourceMappingURL=morgan.js.map