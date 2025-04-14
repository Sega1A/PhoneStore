import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Galeria.css';

const Galeria = () => {
  const [user, setUser] = useState({ role: 'Usuario' });

  const toggleRole = () => {
    setUser(prevUser => ({
      role: prevUser.role === 'Usuario' ? 'Administrador' : 'Usuario'
    }));
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Inicio</Link>
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
          <>
            <li className="navbar-item">
              <Link to="/admin-dashboard" className="navbar-link">Panel Admin</Link>
            </li>
            <li className="navbar-item">
              <Link to="/manage-users" className="navbar-link">Gestionar Usuarios</Link>
            </li>
          </>
        )}
      </ul>

      <div className="user-role">
        <span>{user.role}</span>
        <button className="role-toggle-btn" onClick={toggleRole}>
          Cambiar a {user.role === 'Usuario' ? 'Administrador' : 'Usuario'}
        </button>
      </div>
    </nav>
  );
};

export default Galeria;
