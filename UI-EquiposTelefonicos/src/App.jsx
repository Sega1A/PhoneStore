import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import RegistroCelulares from './RegistroCelulares'; 
import Galeria from './Galeria'; 
import './App.css';
function App() {
  const [user, setUser] = useState({ role: 'Usuario' });

  // Cambiar entre rol de Usuario y Administrador
  const toggleRole = () => {
    setUser(prevUser => ({
      role: prevUser.role === 'Usuario' ? 'Administrador' : 'Usuario'
    }));
  };

  return (
    <div className="App">
      {/* Barra de navegación centralizada en App */}
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Galeria</Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">Acerca de</Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">Servicios</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">Contacto</Link>
          </li>

          {user.role === 'Administrador' && (
            <li className="navbar-item">
              <Link to="/registro" className="navbar-link">Registro</Link>
            </li>
          )}
          {user.role === 'Administrador' && (
            <li className="navbar-item">
              <Link to="/reporte" className="navbar-link">Reporte</Link>
            </li>
          )}
        </ul>
        
        <div className="user-role">
          <span>{user.role}</span>
          <button className="role-toggle-btn" onClick={toggleRole}>
            Cambiar a {user.role === 'Usuario' ? 'Administrador' : 'Usuario'}
          </button>
        </div>
      </nav>

      {/* Contenido de las rutas */}
      <Routes>
        <Route path="/" element={<Galeria />} />
        <Route path="/registro" element={<RegistroCelulares />} />
        {/* Otras rutas que quieras agregar */}
      </Routes>
    </div>
  );
}

export default App;
