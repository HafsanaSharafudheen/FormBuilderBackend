import mongoose from 'mongoose';
import configKeys from '../../../Utils/config';


mongoose.set('strictQuery', true);

const connectDB = async () => {
  try {
    await mongoose.connect(configKeys.MONGODB_URI);
    console.log('Mongodb Connected')
  } catch (error) {
    console.log('Error in Mongodb Connection: ', error);
    process.exit(1);
  }
};

export default connectDB;