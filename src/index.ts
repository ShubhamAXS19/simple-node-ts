import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("MongoDB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
connectDB();
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/mongo", (req, res) => {
  res.send(process.env.MONGO_URI);
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
