import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ModalBase from "./Components/ModalBase";
import FormDetalleProducto from "./Pages/FormDetalleProducto";
import { Button } from "react-bootstrap";

function App() {
  // const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(true);
  const dataPhone = {
    model: "MODELO - 100949",
    marc: "Marca de prueba",
    specs:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda alias nemo vel reiciendis! Facilis eos minima sapiente amet quos quisquam ut? Soluta, inventore? Maiores suscipit tempore praesentium, reprehenderit ipsa sed?",
    price: 13.3,
  };

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <Button onClick={() => setShowModal(true)}>Abrir modal genérico</Button>

      <ModalBase
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Detalle del Producto"
        // footer={null} // O un botón personalizado si querés
      >
        <FormDetalleProducto data={dataPhone} />
      </ModalBase>
    </>
  );
}

export default App;
