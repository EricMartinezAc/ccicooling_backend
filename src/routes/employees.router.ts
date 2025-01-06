// src/routes/employeeRoutes.ts
import { NextFunction, Request, Response, Router } from "express";
import {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "../controllers/employees.controller";

const router = Router();

router.get("/getAllEmployees", getAllEmployees);
router.get("/getEmployeeById:id", getEmployeeById);
router.post("/createEmployee", createEmployee);
router.put("/updateEmployee:id", updateEmployee);
router.delete("/deleteEmployee:id", deleteEmployee);

export default router;
