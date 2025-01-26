import { NextFunction, Request, Response } from "express";
import Employee from "../models/Employee";

// Wrapper para manejar errores
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export const getAllEmployees = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

export const getEmployeeById = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const employee = await Employee.findById(req.params.id);
      if (!employee)
        return res.status(404).json({ message: "Employee not found" });
      res.status(200).json(employee);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

export const createEmployee = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const newEmployee = new Employee(req.body);
      await newEmployee.save();
      res.status(201).json(newEmployee);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

export const updateEmployee = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const updatedEmployee = await Employee.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedEmployee)
        return res.status(404).json({ message: "Employee not found" });
      res.status(200).json(updatedEmployee);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

export const deleteEmployee = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
      if (!deletedEmployee)
        return res.status(404).json({ message: "Employee not found" });
      res.status(200).json({ message: "Employee deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);
