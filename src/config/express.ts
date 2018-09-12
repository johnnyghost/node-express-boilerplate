import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './../modules';

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
    this.config();
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
  private config():void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
    // enable CORS - Cross Origin Resource Sharing
    this.app.use(cors());
  }
}

export default new App().app;
