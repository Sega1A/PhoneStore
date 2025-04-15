import React, { useState, useEffect } from "react";
import "./Galeria.css";
import { Button } from "react-bootstrap";
import ModalBase from "./Components/ModalBase";
import reactLogo from "./assets/react.svg";

const Tarjeta = ({ id, nombre, caracteristica, modelo }) => {
  const [showModal, setShowModal] = useState(false);

  const dataPhone = {
    model: modelo,
    marc: nombre,
    specs: caracteristica,
    price: 13.3,
  };

  return (
    <div className="cartilla">
      <div className="tarjeta-horizontal">
        <img
          className="tarjeta-imagen"
          src={reactLogo}
          alt="Imagen del producto"
        />
        <div className="tarjeta-contenido">
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>{nombre}</td>
              </tr>
              <tr>
                <th>Característica</th>
                <td>{caracteristica}</td>
              </tr>
              <tr>
                <th>Modelo</th>
                <td>{modelo}</td>
              </tr>
            </tbody>
          </table>
          <Button onClick={() => setShowModal(true)}>Comprar</Button>
        </div>
      </div>

      <ModalBase
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Comprar Equipo Telefonico"
        data={dataPhone}
      />
    </div>
  );
};

const Galeria = () => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    // datos fake
    const fetchDatos = () => {
      const data = Array.from({ length: 12 }).map((_, i) => ({
        nombre: `Producto ${i + 1}`,
        caracteristica: `Característica impresionante ${i + 1}`,
        modelo: `Modelo-${1000 + i}`,
      }));
      setDatos(data);
    };

    fetchDatos();
  }, []);

  return (
    <div className="content">
      <div className="tabla-galeria">
        {datos.map((item, index) => (
          <Tarjeta
            key={index}
            id={index}
            nombre={item.nombre}
            caracteristica={item.caracteristica}
            modelo={item.modelo}
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
