import mongoose from 'mongoose';

const URI = process.env.MONGODB_URI;
const options = {};

if (!URI) throw new Error('please add your Mongo Uri to .env');

export const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(URI, options);
      console.log('db connected');
    }
  } catch (err: any) {
    console.log(err);
  }
};
