

function Footer() {
  return (
    <footer className="bg-[#0a0a1a] text-gray-400 px-12 py-16">
      
      <div className="grid md:grid-cols-3 gap-10">
        
        {/* LOGO / INFO */}
        <div>
          <h2 className="text-white text-xl font-bold mb-4">Digital</h2>
          <p className="text-sm">
            Creamos soluciones digitales modernas para impulsar tu negocio.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-4">Enlaces</h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li><a href="#" className="hover:text-white">Inicio</a></li>
            <li><a href="#services" className="hover:text-white">Servicios</a></li>
            <li><a href="#contact" className="hover:text-white">Contacto</a></li>
          </ul>
        </div>

        {/* CONTACTO */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contacto</h3>
          <p className="text-sm">correo@email.com</p>
          <p className="text-sm">+57 300 000 0000</p>
        </div>

      </div>

      {/* LINEA */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © 2026 Digital - Todos los derechos reservados
      </div>

    </footer>
  );
}

export default Footer;