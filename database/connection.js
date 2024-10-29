import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose
  .connect(process.env.URI, {})
  .then(() => console.log("Database connected!"))
  .catch((e) => console.log("Connection error: " + e));