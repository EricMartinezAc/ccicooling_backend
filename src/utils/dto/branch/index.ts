import { Geolocation } from "../common/common.geoloacion.dto";
import { Inventory } from "./inventory.dto";
import { RRHH } from "./rrhh.dto";
import { Security } from "./security.dto";
import { AREA } from "./area.dto";

export interface Branch {
  id_user: number;
  nombre: string;
  direccion: string;
  telefono: number;
  email: string;
  estado: boolean;
  fecha_creacion: string;
  fecha_actualizacion: string;
  ubicacion_geografica: Geolocation;
  control_personal?: RRHH;
  areas?: AREA[];
  inventario?: Inventory;
  seguridad_y_monitoreo?: Security;
  historico_reportes?: string[];
}
