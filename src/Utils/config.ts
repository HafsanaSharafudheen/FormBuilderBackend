import dotenv from "dotenv";
dotenv.config();

const configKeys = {
 
  PORT: process.env.PORT,
  MONGODB_URI: process.env.MONGODB_URI as string,

 
};

export default configKeys;
