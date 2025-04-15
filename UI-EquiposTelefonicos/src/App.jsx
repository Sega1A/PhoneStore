import { Routes, Route, Link } from "react-router-dom";

import RegistroCelulares from "./RegistroCelulares";
import Galeria from "./Galeria";
import ModalBase from "./Components/ModalBase";
import { Button } from "react-bootstrap";
import Reportes from "./Pages/Reportes";
import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [user, setUser] = useState({ role: "Usuario" });

  // Cambiar entre rol de Usuario y Administrador
  const toggleRole = () => {
    setUser((prevUser) => ({
      role: prevUser.role === "Usuario" ? "Administrador" : "Usuario",
    }));
  };
  const [showModal, setShowModal] = useState(false);
  const dataPhone = {
    model: "MODELO - 100949",
    marc: "Marca de prueba",
    specs:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda alias nemo vel reiciendis! Facilis eos minima sapiente amet quos quisquam ut? Soluta, inventore? Maiores suscipit tempore praesentium, reprehenderit ipsa sed?",
    price: 13.3,
  };

  return (
    <div className="App">
      {/* Barra de navegación centralizada en App */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Galeria
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              Acerca de
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Servicios
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contacto
            </Link>
          </li>

          {user.role === "Administrador" && (
            <li className="navbar-item">
              <Link to="/registro" className="navbar-link">
                Registro
              </Link>
            </li>
          )}
          {user.role === "Administrador" && (
            <li className="navbar-item">
              <Link to="/reporte" className="navbar-link">
                Reporte
              </Link>
            </li>
          )}
        </ul>

        <div className="user-role">
          <span>{user.role}</span>
          <button className="role-toggle-btn" onClick={toggleRole}>
            Cambiar a {user.role === "Usuario" ? "Administrador" : "Usuario"}
          </button>
        </div>
      </nav>

      {/* Contenido de las rutas */}
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/registro" element={<RegistroCelulares />} />
        <Route path="/reporte" element={<Reportes />} />
        {/* Otras rutas que quieras agregar */}
      </Routes>

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
    </div>
  );
}

export default App;
