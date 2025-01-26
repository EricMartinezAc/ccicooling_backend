import mongoose, { Schema, Document } from "mongoose";
import { Branch } from "../utils/dto/branch";

const BranchSchema: Schema = new Schema(
  {
    id_user: { type: String, required: true },
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: Number, required: true },
    email: { type: String, required: true },
    estado: { type: Boolean, required: true },
    fecha_creacion: { type: String, required: true },
    fecha_actualizacion: { type: String, required: true },
    ubicacion_geografica: { type: Object, required: false },
    control_personal: { type: Object, required: false },
    inventario: { type: Object, required: false },
    seguridad_y_monitoreo: { type: Object, required: false },
    historico_reportes: { type: Object, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model<Branch>("Branch", BranchSchema);
