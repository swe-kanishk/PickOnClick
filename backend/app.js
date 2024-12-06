import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectToDb from "./db/dbConnection.js";
import userRoutes from "./routes/user.routes.js";
import captainRoutes from "./routes/captain.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/users", userRoutes); 
app.use("/captains", captainRoutes); 

app.listen(PORT, () => {
  connectToDb();
  console.log(`App is running on ${PORT} successfully!`);
});

export default app;