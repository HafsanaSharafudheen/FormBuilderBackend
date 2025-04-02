import express, { Application } from "express";

const expressConfig = (app: Application) => {
  try {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  } catch (ex) {
    console.error("Error in express configuration: ", ex); // Log first
    throw new Error(`Error in express configuration: ${ex}`); // Then throw
  }
};

export default expressConfig;
