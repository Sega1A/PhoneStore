import React, { useState, useEffect } from 'react';
import './Galeria.css';

const Tarjeta = ({ id }) => {
  const storageKey = `tarjeta-${id}`;
  const [nombre, setNombre] = useState('');
  const [caracteristica, setCaracteristica] = useState('');
  const [modelo, setModelo] = useState('');

  // Cargar datos si existen en localStorage
  useEffect(() => {
    const datosGuardados = localStorage.getItem(storageKey);
    if (datosGuardados) {
      const datos = JSON.parse(datosGuardados);
      setNombre(datos.nombre);
      setCaracteristica(datos.caracteristica);
      setModelo(datos.modelo);
    }
  }, [storageKey]);

  const handleGuardar = () => {
    const datos = { nombre, caracteristica, modelo };
    localStorage.setItem(storageKey, JSON.stringify(datos));
    alert(`Datos guardados para la tarjeta ${id + 1}`);
  };

  return (
    <div className="cartilla">
      <div className="tarjeta-horizontal">
        <img
          className="tarjeta-imagen"
          src={'https://via.placeholder.com/150'}
          alt="Imagen del producto"
        />
        <div className="tarjeta-contenido">
          <table>
            <tbody>
              <tr>
                <th>Nombre</th>
                <td>
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>Característica</th>
                <td>
                  <input
                    type="text"
                    value={caracteristica}
                    onChange={(e) => setCaracteristica(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>Modelo</th>
                <td>
                  <input
                    type="text"
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn-guardar" onClick={handleGuardar}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

const Galeria = () => {
  return (
    <div className="content">
      <div className="tabla-galeria">
        {Array.from({ length: 12 }).map((_, index) => (
          <Tarjeta key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
