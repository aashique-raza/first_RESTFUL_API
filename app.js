import { config } from "dotenv";
config()
import express from 'express'
import connectDB from "./DB/connection.js";
import populationRouter from "./routes/population.route.js";

const URL=process.env.DATABASE_URL;
const PORT=process.env.PORT;

const app=express();

// database connection--
connectDB(URL)

// middleware--
app.use(express.json());

// load rutes--
app.use('/api/population',populationRouter)



// serevr listen---
app.listen(PORT,()=>console.log(`server listen on port no ${PORT}`))

