import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ModalBase from "./Components/ModalBase";
import { Button } from "react-bootstrap";
import Reportes from "./Pages/Reportes";

function App() {
  const [showModal, setShowModal] = useState(false);
  const dataPhone = {
    model: "MODELO - 100949",
    marc: "Marca de prueba",
    specs:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda alias nemo vel reiciendis! Facilis eos minima sapiente amet quos quisquam ut? Soluta, inventore? Maiores suscipit tempore praesentium, reprehenderit ipsa sed?",
    price: 13.3,
  };

  return (
    <>
      <Button onClick={() => setShowModal(true)}>Abrir modal genérico</Button>
      <ModalBase
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Detalle del Producto"
        data={dataPhone}
        // footer={null} //
      >
        {/* <FormDetalleProducto data={dataPhone} /> */}
      </ModalBase>

      <nav>
        <Link to="/reporte">Registro</Link>
      </nav>
      <Routes>
        <Route path="/reporte" element={<Reportes />} />
      </Routes>
    </>
  );
}

export default App;
