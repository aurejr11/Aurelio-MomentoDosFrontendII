// Se crea el inicio de la pagina con el componente header y navbar para mostrarlo en la pagina principal del proyecto

import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Inicio = () => (
  <>
    <Navbar />
    <header className="hero">
      <h1>ESTILO URBANO <span>REDEFINIDO</span></h1>
      <p>Descubre nuestra colección exclusiva de ropa urbana minimalista</p>
      <Link to="Productos">
  <button className="btn-gold">
    Explorar Colección
  </button>
</Link>
    </header>
    
    <section className="features-grid">
      <div className="feature-item">
        <span>✨</span>
        <h3>DISEÑO ÚNICO</h3>
        <p>Piezas exclusivas con estética urbana y minimalista.</p>
      </div>
      <div className="feature-item">
        <span>✔</span>
        <h3>CALIDAD PREMIUM</h3>
        <p>Materiales de alta calidad para maxima durabilidad.</p>
      </div>
      <div className="feature-item">
        <span>⚡</span>
        <h3>ENVÍO RÁPIDO</h3>
        <p>Entrega express en 24-48 horas.</p>
      </div>
    </section>
    <Footer />
  </>
);
export default Inicio;