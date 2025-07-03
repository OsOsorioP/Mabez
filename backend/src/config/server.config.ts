import cors from "cors";
import dotenv from "dotenv"
import express from "express";

class Server {
  public app: express.Application;

  constructor() {
    dotenv.config({ path: ".env" });
    this.app = express();
    this.initConfig();
  }

  public initConfig() {
    this.app.set("PORT", process.env.PORT);
    this.app.use(cors());
    this.app.use(express.json({ limit: "50MB" }));
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default Server;