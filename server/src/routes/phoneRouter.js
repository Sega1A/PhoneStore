import { Router } from "express";
import { getPhones, addPhone } from "../controllers/phoneController.js";
import { upload } from "../middleware/upload.js";

export const phoneRouter = Router();

phoneRouter.get("/getPhones", getPhones);
phoneRouter.post("/addPhone", upload.single("photo"), addPhone);
