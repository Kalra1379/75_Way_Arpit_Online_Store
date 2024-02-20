import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './Routes/productRoute';
import authRouter from './Routes/authRoute';
import cookie from 'cookie-parser';

dotenv.config();
const app=express();
app.use(express.json());
app.use(cors());
app.use(cookie());

const MONGODB_URL=process.env.MONGO_URL as string;
const PORT=process.env.PORT;

//all routes defined
app.use("/api/auth",authRouter);
app.use('/api/products', productRouter);

//connected to database
mongoose.connect(MONGODB_URL).then(()=>{
    console.log("Your DataBase is Connected to server");
    app.listen(PORT,()=>{
        console.log(`Your Server is Ready at Port ${PORT}`);
    })
})