import express from "express";
import { adduser, getUsers } from "../controllers/usersController.js";

const router = express.Router();

router.post("/", adduser);
router.get("/", getUsers);

export default router;
