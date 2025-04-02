import { Application } from "express";
import formRouter from "./form";



const routes = (app: Application) => {
  
    app.use("/form", formRouter);

// app.use('/', (req, res) => {
//     res.send("Hello World!")
// }

    //)
}

export default routes;
