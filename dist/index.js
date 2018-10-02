"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const winston_1 = require("./common/logger/winston");
const Express_1 = require("./config/Express");
const port = process.env.PORT || 3000;
Express_1.default.listen(port, () => {
    winston_1.default.debug(`Listening at http://localhost:${port}/`);
});
//# sourceMappingURL=index.js.map