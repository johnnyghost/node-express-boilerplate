import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import methodOverride from 'method-override';
import routes from '../modules';

class App {

  public app: express.Application;

  /**
   * Initiate and configure the App.
   *
   * @constructor
   */
  constructor() {
    this.app = express();

    this.routes();
    this.middleware();
  }

  /**
   * Initiate the routes.
   */
  private routes():void {
    this.app.use('/', routes);
  }

  /**
   * Config the app
   */
  private middleware():void {
    // parse application/json type post data
    this.app.use(bodyParser.json());
    // parse application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // enable CORS - Cross Origin Resource Sharing
    this.app.use(cors());
    // lets you use HTTP verbs such as PUT or DELETE
    // in places where the client doesn't support it
    this.app.use(methodOverride());

  }
}

export default new App().app;
