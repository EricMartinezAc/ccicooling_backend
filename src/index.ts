// src/index.ts
import express, { Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import employeeRoutes from "./routes/employees.router";
import Conexiondb from "./utils/db/conection.mongodb";

// Configuración de variables de entorno
dotenv.config();

// Inicializar base de datos
Conexiondb();

const app = express();
const PORT = process.env.PORT || 3200;

// Configurar CORS
app.use(
  cors({
    origin: "*",
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
  })
);

// Middleware para analizar JSON
app.use(bodyParser.json());

// Rutas
app.use("/api/employees", employeeRoutes);

// Manejo de errores
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
