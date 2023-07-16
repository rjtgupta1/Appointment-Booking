import dotenv from 'dotenv'
import express from "express";
import print from './controller/paymentController.js';
// import createOrder from './controller/paymentController.js';

dotenv.config()
const PORT = process.env.PORT;



const app = express();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

// console.log(process.env.RAZORPAY_KEY_SECRET);

// createOrder()

print()