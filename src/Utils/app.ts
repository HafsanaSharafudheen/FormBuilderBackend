import express, { Application, NextFunction } from "express";
import http from "http";
import connectDB from "../Frameworks/DataBase/MongoDb/connection";
import expressConfig from "../Frameworks/Webserver/express";
import errorHandlingMiddleware from "../Frameworks/Webserver/middilewares/errorHandling";
import AppError from "../Utils/appError";
import serverConfig from "../Frameworks/Webserver/server";
import routes from "../Frameworks/Webserver/Routes";
import dotenv from "dotenv";

const app: Application = express();
app.use(express.json());
dotenv.config();

const server = http.createServer(app);


connectDB();

expressConfig(app);

routes(app);

app.use(errorHandlingMiddleware);
app.all("*", (req, res, next: NextFunction) => {
  next(new AppError("Not found", 404));
});

serverConfig(server).startServer();

console.log("1");