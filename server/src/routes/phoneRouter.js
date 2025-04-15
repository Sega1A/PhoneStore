import { Router } from "express";
import { getPhones,addPhone } from "../controllers/phoneController.js";

export const phoneRouter = Router();

phoneRouter.get("/getPhones", getPhones);
phoneRouter.post("/addPhone", addPhone);
