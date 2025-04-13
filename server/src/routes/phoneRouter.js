import { Router } from "express";
import { getPhones } from "../controllers/phoneController.js";

export const phoneRouter = Router();

phoneRouter.get("/getPhones", getPhones);
