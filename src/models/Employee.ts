import mongoose, { Schema, Document } from "mongoose";
import { Employee } from "../utils/dto/common";

const EmployeeSchema: Schema = new Schema(
  {
    nombre: { type: String, required: true },
    cargo: { type: String, required: true },
    salario: { type: Number, required: true },
    fecha_contratacion: { type: String, required: true },
    fecha_finalizacion: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Employee>("Employee", EmployeeSchema);
