
// Footer.jsx
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-col">
        <h3 style={{ color: 'var(--gold)' }}>URBAN THREADS</h3>
        <p>Redefiniendo el estilo urbano con diseños minimalistas y calidad premium.</p>
      </div>

      <div className="footer-col">
        <h4>ENLACES</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</Link></li>
          <li><Link to="/productos" style={{ color: 'white', textDecoration: 'none' }}>Productos</Link></li>
          <li><Link to="/contacto" style={{ color: 'white', textDecoration: 'none' }}>Contacto</Link></li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>AYUDA</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>Guía de tallas</li>
          <li>Envíos</li>
          <li>Devoluciones</li>
          <li>FAQ</li>
        </ul>
      </div>

      <div className="footer-col">
        <h4>SÍGUENOS</h4>
        <div style={{ display: 'flex', gap: '15px', fontSize: '1.2rem' }}>
          <span>🐦</span> <span>📸</span> <span>📘</span>
        </div>
      </div>
      
      <div style={{ gridColumn: '1 / -1', textAlign: 'center', paddingTop: '30px', borderTop: '1px solid #333', marginTop: '20px', fontSize: '0.8rem' }}>
        © 2026 Urban Threads. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;