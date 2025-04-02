import express from "express";
import { uploadComponent } from "../../../AdapterLayer/FormController/uploadController";

const formRouter = express.Router();

formRouter.post('/upload', uploadComponent); 

export default formRouter;
