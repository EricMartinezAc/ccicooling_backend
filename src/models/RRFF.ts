import mongoose, { Schema, Document } from "mongoose";
import { RRFF } from "../utils/dto/branch/rrff.dto";

const RRFFSchema: Schema = new Schema(
  {
    id_user: { type: String, required: true },
    id_branch: { type: String, required: true },
    ids_areas: { type: Array, required: true },
    nombre: { type: String, required: true },
    tipo: { type: String, required: true },
    state: { type: Boolean, required: true },
    id_ot: { type: Array, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<RRFF>("RRFF", RRFFSchema);
