import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { apiRouter } from "./src/routes/api.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/phones", express.static("src/public/phones"));

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
