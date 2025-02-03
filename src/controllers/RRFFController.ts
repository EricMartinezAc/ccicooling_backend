import { NextFunction, Request, Response } from "express";
import RRFF from "../models/RRFF";

// Wrapper para manejar errores
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export const getAllRRFF = asyncHandler(async (req: Request, res: Response) => {
  try {
    const rrff = await RRFF.find();
    res.status(200).json(rrff);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export const getRRFFById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const rrff = await RRFF.findById(req.params.id);
    if (!rrff) return res.status(404).json({ message: "rrff not found" });
    res.status(200).json(rrff);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export const createRRFF = asyncHandler(async (req: Request, res: Response) => {
  try {
    const newRRFF = new RRFF(req.body);
    await newRRFF.save();
    res.status(201).json(newRRFF);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export const updateRRFF = asyncHandler(async (req: Request, res: Response) => {
  try {
    const updatedRRFF = await RRFF.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateRRFF) return res.status(404).json({ message: "RRFF not found" });
    res.status(200).json(updateRRFF);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export const deleteRRFF = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deletedRRFF = await RRFF.findByIdAndDelete(req.params.id);
    if (!deletedRRFF)
      return res.status(404).json({ message: "RRFF not found" });
    res.status(200).json({ message: "RRFF deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
