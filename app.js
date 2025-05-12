import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import connectDB from './database/mongoDB.js';


dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
    connectDB();
});

export default app;