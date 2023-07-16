import dotenv from 'dotenv'
import express from "express";
import createOrder from './controller/paymentController.js';

dotenv.config()
const PORT = process.env.PORT;


const app = express();

app.use(express.json())

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

app.post('/order',createOrder)