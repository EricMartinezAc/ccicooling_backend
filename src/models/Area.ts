import mongoose, { Schema, Document } from "mongoose";
import { AREA } from "../utils/dto/branch/area.dto";

const AreaSchema: Schema = new Schema(
  {
    nombre: { type: String, required: true },
    ccosto: { type: Number, required: true },
    dimension: { type: Number, required: true },
    id_dpto: { type: String, required: true },
    id_branch: { type: String, required: true },
    id_user: { type: String, required: true },
    state: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<AREA>("Area", AreaSchema);
