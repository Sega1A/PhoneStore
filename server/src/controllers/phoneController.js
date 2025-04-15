import { getAllPhones, insertPhone } from "../services/phoneService.js";

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

export async function addPhone(req, res) {
  try {
    const { model, marc, specs, price } = req.body;
    const registerDate = new Date();
    const state = 1;

    const photo = req.file
      ? `${req.protocol}://${req.get("host")}/phones/${req.file.filename}`
      : null;

    const response = await insertPhone(
      model,
      marc,
      specs,
      registerDate,
      photo,
      state,
      price
    );

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error de la base de datos",
      error: error.message ?? "Error desconocido",
    });
  }
}
