// src/index.ts
import express, { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes";

import areasRoutes from "./routes/areasRoutes";
import rrffRoutes from "./routes/rrffRoutes";

import branchRoutes from "./routes/branchRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error("Error connecting to MongoDB:", error));

app.use(
  cors({
    origin: ["http://localhost:3001", "http://otro-origen.com"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use("/api/employees", employeeRoutes);
app.use("/api/branches", branchRoutes);
app.use("/api/areas", areasRoutes);
app.use("/api/rrff", rrffRoutes);

// Middleware para manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
