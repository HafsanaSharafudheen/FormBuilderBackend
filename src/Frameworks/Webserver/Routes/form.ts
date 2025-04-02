import express from "express";
import { saveFormController } from "../../../AdapterLayer/FormController/formController";

const formRouter = express.Router();

formRouter.post("/saveFormData", saveFormController);

export default formRouter;
