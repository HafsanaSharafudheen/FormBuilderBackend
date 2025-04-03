import express, { Application } from "express";
import path from "path";

const expressConfig = (app: Application) => {
  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use('/public', express.static(path.join(process.cwd(), 'src', 'public')));

  } catch (ex) {
    console.error("Error in express configuration: ", ex); // Log first
    throw new Error(`Error in express configuration: ${ex}`); // Then throw
  }
};

export default expressConfig;
