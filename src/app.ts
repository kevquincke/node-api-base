import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import winston from 'winston';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import 'express-async-errors';

import { v1 } from './controllers/api/v1';
import { exceptionMiddleware } from './middleware/exception.middleware';

class App {
  private app: express.Application;

  constructor() {
    this.app = express();

    dotenv.config();
    this.configureViewEngine();
    this.configureLogging();
    this.configureMiddleware();
    this.configureRoutes();
    this.configureEnvironment();
  }

  public async listen(port: number, callback?: () => void) {
    await this.connectToDatabase();

    this.app.listen(port, callback);
  }

  private configureViewEngine() {
    this.app.set('view engine', 'pug');
  }

  private configureLogging() {
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.exceptions.handle(
      new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', (ex) => {
      throw ex;
    });
  }

  private configureMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static('public'));
  }

  private configureRoutes() {
    this.app.use('/api/v1', v1);
    this.app.use(exceptionMiddleware);
  }

  private configureEnvironment() {
    if (!process.env.JWT_KEY) {
      throw new Error('FATAL ERROR: JWT_KEY is not defined!');
    }
  }

  private async connectToDatabase() {
    await createConnection();
  }
}

export default App;
