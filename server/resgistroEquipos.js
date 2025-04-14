// Función para manejar el registro de equipos
const registrarEquipo = (req, res) => {
    const { modelo, marca, fecha, cantidad, especificaciones, precio } = req.body; // Recibe datos del cliente

    // Validación básica
    if (!modelo||marca||fecha||cantidad|| especificaciones||precio <= 0) {
        return res.status(400).json({ error: "Datos inválidos. Revisa los campos." });
    }

    // Aquí puedes agregar lógica para guardar en la base de datos
    console.log("Equipo registrado:", { modelo, marca, fecha, cantidad, especificaciones, precio });
    
    // Respuesta al cliente
    res.status(200).json({ mensaje: "Equipo registrado con éxito." });
};

// Exportar la función si usas módulos
module.exports = { registrarEquipo };