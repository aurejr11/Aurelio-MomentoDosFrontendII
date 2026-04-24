// Se crean los estilos y la estructura del navbar, se importan los componentes necesarios

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">URBAN THREADS</div>
    <ul className="nav-links">
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/Productos">Productos</Link></li>
      <li><Link to="/Contacto">Contacto</Link></li>
    </ul>
  </nav>
);
export default Navbar;