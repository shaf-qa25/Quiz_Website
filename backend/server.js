import express from 'express';
import 'dotenv/config';
import connectDB from "./config/db.js";
import userRouter from './routes/userRoutes.js';
import resultRouter from './routes/resultRoutes.js';
import cors from 'cors';


connectDB();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true}))


app.get("/", (req,res)=>{
    res.send('API working')
});

app.use('/api/auth', userRouter);
app.use('/api/results', resultRouter);

app.listen(port, ()=>{
    console.log(`server is running on ${port}`);
})