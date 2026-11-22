import express from "express";
import { addBus, getAvailableBuses } from "../controllers/busesController.js";

const router = express.Router();

router.post("/", addBus);
router.get("/available/:seats", getAvailableBuses);

export default router;
