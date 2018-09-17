import express from 'express';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import morgan from 'morgan';
import { useExpressServer } from 'routing-controllers';
import path from 'path';
import { loggerStream } from '../common/logger/morgan';

class App {

  public app: express.Application;

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
  private setupControllers():void {
    const controllersPath = path.resolve('src', 'modules');
    useExpressServer(this.app, {
        cors: true,
        controllers:[`${controllersPath}/**/*.controller.ts`]
    });
  }

  /**
   * Config the app
   */
  private middleware():void {
    // parse application/json type post data
    this.app.use(bodyParser.json());
    // parse application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // lets you use HTTP verbs such as PUT or DELETE
    // in places where the client doesn't support it
    this.app.use(methodOverride());
    this.app.use(morgan('combined', loggerStream));
  }
}

export default new App().app;
