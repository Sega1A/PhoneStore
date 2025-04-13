import { getAllPhones } from "../services/phoneService.js";

export async function getPhones(req, res) {
  try {
    const phones = await getAllPhones();
    res.json(phones);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error de la base de datos",
      error: error.message ?? "Error desconocido",
    });
  }
}
