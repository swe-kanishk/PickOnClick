import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import cors from "cors"
import cookieParser from 'cookie-parser';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('hello')
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT} successfully!`);
})

export default app;