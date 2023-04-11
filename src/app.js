import express from "express";
import categoryRouter from "./routes/category";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import cors from "cors";

import mongoose from "mongoose";
const app = express();

// middleware
app.use(express.json());
app.use(cors());
// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);
// server

mongoose.connect("mongodb://127.0.0.1:27017/we17307");
export const viteNodeApp = app;
