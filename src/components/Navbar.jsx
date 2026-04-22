// Se crean los estilos y la estructura del navbar, se importan los componentes necesarios

import React from 'react';
import {link} from 'react-router-dom';


function Navbar() {
    return(

        <nav className="flex justify-between items-center px-10 py-5 bg-[#0e0a27] text-white">
      <h2 className="text-xl font-bold">URBAN THREADS</h2>

      <ul className="flex gap-6">
        <li><Link to="/" className="hover:text-blue-500">Inicio</Link></li>
        <li><Link to="/servicios" className="hover:text-blue-500">Servicios</Link></li>
        <li><Link to="/contacto" className="hover:text-blue-500">Contacto</Link></li>
      </ul>
    </nav>

    );

}

export default Navbar;