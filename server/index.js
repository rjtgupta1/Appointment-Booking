import dotenv from 'dotenv'
import express from "express";

dotenv.config({path:"./config/config.env"})
const PORT = process.env.PORT;



const app = express();

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
