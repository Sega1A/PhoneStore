import { Router } from "express";
import { exampleRouter } from "./exampleRouter.js";

export const apiRouter = Router();

apiRouter.get("/", (req, res) => {
  console.log("Test route");
  res.json("Test route");
});

apiRouter.use("/examples", exampleRouter);
