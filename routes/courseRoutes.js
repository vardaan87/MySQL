import express from "express";
import { addCourse, getAllCourses } from "../controllers/courseController.js";

const router = express.Router();

router.post("/", addCourse);
router.get("/", getAllCourses);

export default router;
