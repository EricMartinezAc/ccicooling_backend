import mongoose, { Schema, Document } from "mongoose";

export interface IEmployee extends Document {
  name: string;
  position: string;
  department: string;
  salary: number;
}

const EmployeeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    position: { type: String, required: true },
    department: { type: String, required: true },
    salary: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<IEmployee>("Employee", EmployeeSchema);
