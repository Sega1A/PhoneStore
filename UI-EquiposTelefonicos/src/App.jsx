import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ModalBase from "./Components/ModalBase";
// import FormDetalleProducto from "./Pages/FormDetalleProducto";
import { Button } from "react-bootstrap";

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
    </>
  );
}

export default App;
