import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./utils/config.js";
import teacherRouter from "./routes/teacherRouter.js";
import loginRouter from "./routes/loginRouter.js";

const app = express();

const databaseConnection = async (url) => {
  await mongoose.connect(url);
  console.log("Database connected");
};
databaseConnection(config.MONGODBURI);

app.use(express.json());
app.use(cors());
app.use("/api/teachers", teacherRouter);
app.use("/api/teachers/login", loginRouter);
export default app;
