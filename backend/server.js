import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRouter from './routes/userRoutes.js';
import quizRoutes from "./routes/quizRoutes.js"
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req,res)=>{
    res.json({
        message: "ping-pong",
    })
});

app.use('/api/users', userRouter);
app.use('/api/quiz',quizRoutes);

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})