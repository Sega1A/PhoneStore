import React, { useState, useEffect } from "react";
import "./Galeria.css";
import { Button } from "react-bootstrap";
import ModalBase from "./Components/ModalBase";
import reactLogo from "./assets/react.svg";
import { getPhones } from "./services/phoneService";

const Tarjeta = ({ nombre, caracteristica, modelo, price, photo }) => {
  const [showModal, setShowModal] = useState(false);

  const dataPhone = {
    model: modelo,
    marc: nombre,
    specs: caracteristica,
    price: price,
    photo: photo,
  };

  return (
    <div className="cartilla">
      <div className="tarjeta-horizontal">
        <img
          className="tarjeta-imagen"
          src={photo ?? reactLogo}
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
    fetchPhones();
  }, []);

  const fetchPhones = async () => {
    try {
      const phoneList = await getPhones();
      console.log(phoneList);

      setDatos(phoneList);
    } catch (error) {
      console.error(error);
      setDatos([]);
    }
  };

  return (
    <div className="content">
      <div className="tabla-galeria">
        {datos.map((item, index) => (
          <Tarjeta
            key={index}
            id={index}
            nombre={item.MODEL}
            caracteristica={item.SPECS}
            modelo={item.MODEL}
            price={item.PRICE}
            photo={item.PHOTO}
          />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
