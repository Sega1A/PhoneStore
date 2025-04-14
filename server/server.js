import express from "express";
import { PORT } from "./config.js";
import { apiRouter } from "./src/routes/api.js";

const app = express();
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Listening in port ${PORT}`);
});
