// src/routes/employeeRoutes.ts
import { Router } from "express";
import {
  getAllAreas,
  getAreaById,
  createArea,
  updateArea,
  deleteArea,
} from "../controllers/AreasController";

const router = Router();

router.get("/", getAllAreas);
router.get("/:id", getAreaById);
router.post("/", createArea);
router.put("/:id", updateArea);
router.delete("/:id", deleteArea);

export default router;
