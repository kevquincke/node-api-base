import * as express from "express";
import * as dotenv from "dotenv";
import * as bodyParser from "body-parser";
import { createConnection } from "typeorm";
import "reflect-metadata";

import { v1 } from "./controllers/api/v1";

class App {
  private app: express.Application;

  constructor() {
    this.app = express();

    dotenv.config();
    this.configureViewEngine();
    this.configureMiddleware();
    this.configureRoutes();
  }

  private configureViewEngine() {
    this.app.set("view engine", "pug");
  }

  private configureMiddleware() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(express.static("public"));
  }

  private configureRoutes() {
    this.app.use("/api/v1", v1);
  }

  private async connectToDatabase() {
    await createConnection();
  }

  public async listen(port: number, callback: () => void) {
    await this.connectToDatabase().then(() =>
      console.log("Connected to database...")
    );
    this.app.listen(port, callback);
  }
}

export default App;
