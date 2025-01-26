import { NextFunction, Request, Response } from "express";
import Branch from "../models/Branch";

// Wrapper para manejar errores
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export const getAllBranches = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const branches = await Branch.find();
      res.status(200).json(branches);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

export const getBranchById = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const branch = await Branch.findById(req.params.id);
      if (!branch) return res.status(404).json({ message: "Branch not found" });
      res.status(200).json(branch);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);

export const createBranch = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const newBranch = new Branch(req.body);
      await newBranch.save();
      res.status(201).json(newBranch);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

export const updateBranch = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const updatedBranch = await Branch.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updateBranch)
        return res.status(404).json({ message: "Branch not found" });
      res.status(200).json(updateBranch);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
);

export const deleteBranch = asyncHandler(
  async (req: Request, res: Response) => {
    try {
      const deletedBranch = await Branch.findByIdAndDelete(req.params.id);
      if (!deletedBranch)
        return res.status(404).json({ message: "Branch not found" });
      res.status(200).json({ message: "Branch deleted successfully" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
);
