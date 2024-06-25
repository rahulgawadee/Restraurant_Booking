import express, { urlencoded } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from './database/dbConnection.js'
import { errorMiddleware } from "./error/error.js";
import reservationRouter from './routes/reservationRoute.js'


const app = express();

dotenv.config({path:"./config/config.env"});

// Frontend ka setup

app.use(
    cors({
    origin: [process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true,
})
);

app.use(express.json());   // string la object madhe convert karnyasathii express,json use karto

app.use(express.urlencoded({ extended: true }));//ismee yeh jo data haii yeh kis type ka hone wala haai yeh batata haii...

app.use("/api/v1/reservation",  reservationRouter);

dbConnection();

app.use(errorMiddleware);


export default app;