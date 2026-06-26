import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import contactRoutes from "./routes/contactRoutes.js";

const app = express();

app.use(cors());

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/digitalGrowth")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use("/api", contactRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});