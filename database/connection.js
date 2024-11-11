import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

try {
  await mongoose.connect(process.env.URI, {});
  console.log("db conectada! 😍");
} catch (error) {
  console.log("error de conexión: " + error);
}