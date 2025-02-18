// src/routes/employeeRoutes.ts
import { Router } from "express";
import {
  getAllBranches,
  getAllBranchesByUser,
  getBranchById,
  createBranch,
  updateBranch,
  deleteBranch,
} from "../controllers/BranchController";

const router = Router();

router.get("/", getAllBranches);
router.post("/getAllBranchesByUser", getAllBranchesByUser);
router.get("/:id", getBranchById);
router.post("/", createBranch);
router.put("/:id", updateBranch);
router.delete("/:id", deleteBranch);

export default router;