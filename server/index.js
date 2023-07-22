import dotenv from "dotenv";
import express from "express";
import { createOrder, verifyPayment } from "./controller/paymentController.js";
import cors from 'cors'
import mongoose  from "mongoose";

dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors())

try {
  mongoose.connect(process.env.DB_URI)
  app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
  });
} catch (error) {
  console.log(error);
}


app.post("/order", createOrder);
app.post("/verifyPayment",verifyPayment)
