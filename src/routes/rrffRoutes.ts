// src/routes/employeeRoutes.ts
import { Router } from "express";
import {
  getAllRRFF,
  getRRFFById,
  createRRFF,
  updateRRFF,
  deleteRRFF,
} from "../controllers/RRFFController";

const router = Router();

router.get("/", getAllRRFF);
router.get("/:id", getRRFFById);
router.post("/", createRRFF);
router.put("/:id", updateRRFF);
router.delete("/:id", deleteRRFF);

export default router;
