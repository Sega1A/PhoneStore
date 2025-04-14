import { useState } from 'react';
import './App.css';
import celularImg from './assets/celular.png'; // Asegúrate de que exista esta imagen

const App = () => {
  const [celulares, setCelulares] = useState([]);
  const [nuevoCelular, setNuevoCelular] = useState({
    marca: '',
    modelo: '',
    imei: '',
    precio: '',
    cantidad: 1
  });

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNuevoCelular(prev => ({ ...prev, [name]: value }));
  };

  const cambiarCantidad = (delta) => {
    setNuevoCelular(prev => ({
      ...prev,
      cantidad: Math.max(1, parseInt(prev.cantidad || 1) + delta)
    }));
  };

  const validarCampos = () => {
    const { marca, modelo, imei, precio, cantidad } = nuevoCelular;
    if (!marca || !modelo || !imei || !precio || !cantidad) {
      setMensajeError('Todos los campos son obligatorios.');
      return false;
    }
    if (!/^\d{15}$/.test(imei)) {
      setMensajeError('El IMEI debe contener exactamente 15 dígitos.');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validarCampos()) {
      setMostrarModal(true);
      return;
    }
    setCelulares([...celulares, nuevoCelular]);
    setNuevoCelular({ marca: '', modelo: '', imei: '', precio: '', cantidad: 1 });
  };

  const eliminarCelular = (index) => {
    const nuevos = celulares.filter((_, i) => i !== index);
    setCelulares(nuevos);
  };

  return (
    <div className="container">
      <h1>📱 Registro de Celulares</h1>

      <div className="formulario-con-imagen">
        <form onSubmit={handleSubmit} className="formulario-horizontal">
          <div className="campo">
            <label>Marca:</label>
            <input
              type="text"
              name="marca"
              value={nuevoCelular.marca}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label>Modelo:</label>
            <input
              type="text"
              name="modelo"
              value={nuevoCelular.modelo}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label>IMEI:</label>
            <input
              type="text"
              name="imei"
              value={nuevoCelular.imei}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label>Precio:</label>
            <input
              type="text"
              name="precio"
              value={nuevoCelular.precio}
              onChange={handleChange}
            />
          </div>

          <div className="campo">
            <label>Cantidad:</label>
            <div className="contador">
              <button type="button" onClick={() => cambiarCantidad(-1)}>-</button>
              <input
                type="text"
                name="cantidad"
                value={nuevoCelular.cantidad}
                onChange={handleChange}
              />
              <button type="button" onClick={() => cambiarCantidad(1)}>+</button>
            </div>
          </div>

          <button type="submit">Registrar</button>
        </form>

        <img src={celularImg} alt="Celular" className="imagen-lateral-derecha" />
      </div>

      <ul className="lista">
        {celulares.map((cel, index) => (
          <li key={index} className="item">
            <span>{cel.marca} {cel.modelo} - IMEI: {cel.imei} - Precio: {cel.precio} - Cantidad: {cel.cantidad}</span>
            <button onClick={() => eliminarCelular(index)}>Eliminar</button>
          </li>
        ))}
      </ul>

      {mostrarModal && (
        <div className="modal">
          <div className="modal-contenido">
            <p>{mensajeError}</p>
            <button onClick={() => setMostrarModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
