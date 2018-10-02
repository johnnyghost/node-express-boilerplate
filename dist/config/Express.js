"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const morgan = require("morgan");
const routing_controllers_1 = require("routing-controllers");
const path = require("path");
const morgan_1 = require("../common/logger/morgan");
class App {
    /**
     * Initiate and configure the App.
     *
     * @constructor
     */
    constructor() {
        this.app = express();
        this.setupControllers();
        this.middleware();
    }
    /**
     * Initiate the routes.
     */
    setupControllers() {
        const envPath = process.env.NODE_ENV === 'production' ? 'dist' : 'src';
        console.log(envPath);
        const controllersPath = path.resolve(envPath, 'modules');
        routing_controllers_1.useExpressServer(this.app, {
            cors: true,
            controllers: [`${controllersPath}/**/*.controller.*`]
        });
    }
    /**
     * Config the app
     */
    middleware() {
        // parse application/json type post data
        this.app.use(bodyParser.json());
        // parse application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        // lets you use HTTP verbs such as PUT or DELETE
        // in places where the client doesn't support it
        this.app.use(methodOverride());
        this.app.use(morgan('combined', morgan_1.loggerStream));
    }
}
exports.default = new App().app;
//# sourceMappingURL=Express.js.map