import { createPool } from "mysql2/promise";
import {
  DB_DATABASE,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  HOST,
} from "../../config.js";
export const dbConnection = createPool({
  host: HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE,
});
