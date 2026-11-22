import express from "express";
import { addBus, getBuses } from "../controllers/busesController.js";

const router = express.Router();

router.post("/", addBus);
router.get("/available/:seats", getBuses);

export default router;
