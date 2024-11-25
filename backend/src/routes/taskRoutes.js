import express from "express";
import { createTask, deleteTask, getTaskById, getTasks, updateTask } from "../controllers/task/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/task/create", protect, createTask);
router.get("/task", protect, getTasks);
router.get("/task/:id", protect, getTaskById);
router.patch("/task/:id", protect, updateTask);
router.delete("/task/:id", protect, deleteTask);

export default router;
