import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || 3000;
export const HOST = process.env.HOST || "localhost";
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_DATABASE = process.env.DB_DATABASE;
export const DB_PORT = process.env.DB_PORT || 3306;

import fs from "fs";
const dir = "src/public/phones";

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
