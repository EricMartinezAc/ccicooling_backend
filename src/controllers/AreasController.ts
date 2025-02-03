import { NextFunction, Request, Response } from "express";
import Area from "../models/Area";

// Wrapper para manejar errores
const asyncHandler =
  (fn: Function) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export const getAllAreas = asyncHandler(async (req: Request, res: Response) => {
  try {
    const area = await Area.find();
    res.status(200).json(area);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export const getAreaById = asyncHandler(async (req: Request, res: Response) => {
  try {
    const area = await Area.findById(req.params.id);
    if (!area) return res.status(404).json({ message: "area not found" });
    res.status(200).json(area);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});

export const createArea = asyncHandler(async (req: Request, res: Response) => {
  try {
    const newArea = new Area(req.body);
    await newArea.save();
    res.status(201).json(newArea);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export const updateArea = asyncHandler(async (req: Request, res: Response) => {
  try {
    const updatedArea = await Area.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updateArea) return res.status(404).json({ message: "Area not found" });
    res.status(200).json(updateArea);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
});

export const deleteArea = asyncHandler(async (req: Request, res: Response) => {
  try {
    const deletedArea = await Area.findByIdAndDelete(req.params.id);
    if (!deletedArea)
      return res.status(404).json({ message: "Area not found" });
    res.status(200).json({ message: "Area deleted successfully" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
});
