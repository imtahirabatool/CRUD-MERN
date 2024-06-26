import express from "express";
import mongoose from "mongoose";
import bodeParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import route from "./routes/userRoutes.js";

const app = express();
app.use(bodeParser.json());
app.use(
  cors({
    origin: ["https://crud-mern-8hzn.vercel.app"],
    credentials: true,
  })
);
dotenv.config();

const PORT = process.env.PORT || 7000;
const URL = process.env.MONGOURL;
//test route
app.get("/test", (req, res, next)=>{
  res.send("test pass!");
})
mongoose
  .connect(URL)
  .then(() => {
    console.log("DB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server is running on port:${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", route);
