// This' an example controller
import { dbConnection } from "../database/connection.js";

export async function showExample(req, res) {
  // Function that add an example.
  // Export this function allows to import it anywhere you need.
  console.log("This is an example function");
  res.json("Hello from this example function");
}

export async function databaseExample(req, res) {
  // We use a Trycatch block becouse the connection with the database may fail.
  try {
    const query = "SELECT ID, NAME FROM PHONE";
    const [response] = await dbConnection.query(query);
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error de la base de datos",
      error: error.message ?? "Error desconocido",
    });
  }
}
