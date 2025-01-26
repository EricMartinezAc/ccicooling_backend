export interface Kpi {
  ventas_totales: number;
  ventas_por_periodo: {
    dia: number;
    semana: number;
    mes: number;
  };
  objetivo_ventas: number;
  porcentaje_cumplimiento_ventas: number;
  clientes_atendidos: number;
  satisfaccion_clientes: number;
  rendimiento_empleados: number;
  gastos_operativos: number;
  utilidad_neta: number;
  promedio_tiempo_respuesta: number; // en minutos
  tickets_abiertos: number;
}
