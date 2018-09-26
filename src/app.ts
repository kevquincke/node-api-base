import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import winston from 'winston';
import helmet from 'helmet';
import compression from 'compression';
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import 'express-async-errors';

import { v1 } from './controllers/api/v1';
import { exceptionMiddleware } from './middleware/exception.middleware';

class App {
  public server: express.Application;

  constructor() {
    this.server = express();

    this.configureEnvironment();
    this.configureLogging();
    this.configureMiddleware();
    this.configureRoutes();
    this.configureViewEngine();
  }

  public async connectToDatabase() {
    await createConnection({
      type: 'postgres',
      port: parseInt(process.env.DB_PORT, 10),
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      logging: false,
      entities: [__dirname + '/models/**/*.ts'],
    });
  }

  private configureViewEngine() {
    this.server.set('view engine', 'pug');
  }

  private configureLogging() {
    winston.add(new winston.transports.File({ filename: 'logfile.log' }));
    winston.exceptions.handle(
      new winston.transports.File({ filename: 'uncaughtExceptions.log' })
    );

    process.on('unhandledRejection', (ex) => {
      winston.error(ex.message, ex);
      throw ex;
    });
  }

  private configureMiddleware() {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
    this.server.use(express.static('public'));
    this.server.use(helmet());
    this.server.use(compression());
  }

  private configureRoutes() {
    this.server.use('/api/v1', v1);
    this.server.use(exceptionMiddleware);
  }

  private configureEnvironment() {
    dotenv.config({ path: `.${process.env.NODE_ENV}.env` });

    if (!process.env.JWT_KEY) {
      throw new Error('FATAL ERROR: JWT_KEY is not defined!');
    }
  }
}

export default App;
