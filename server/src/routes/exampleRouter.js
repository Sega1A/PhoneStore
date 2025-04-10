import { Router } from "express";
import {
  databaseExample,
  showExample,
} from "../controllers/controllerExample.js";

export const exampleRouter = Router();

exampleRouter.get("/showExampleFunction", showExample);
exampleRouter.get("/databaseExample", databaseExample);
