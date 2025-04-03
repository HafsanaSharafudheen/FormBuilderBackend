import express from "express";
import { saveJsonToFile, uploadComponent } from "../../../AdapterLayer/FormController/uploadController";
import upload from "../middilewares/fileUpload";
import { Request, Response } from "express";

const formRouter = express.Router();

formRouter.post("/upload", upload.single("file"), uploadComponent);
formRouter.post("/upload-json", saveJsonToFile);
    
export default formRouter;
