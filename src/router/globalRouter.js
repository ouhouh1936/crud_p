import express from "express";
import { mainController } from "../controller/globalController";
const globalRouter = express.Router();

globalRouter.get("/", mainController);

export default globalRouter;
