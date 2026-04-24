// se crea y se importa el componente header, card y navbar para la pagina de productos

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Productos = () => (
  <>
    <Navbar />
    <div className="products-container">
      <h2 style={{textAlign: 'center', marginBottom: '30px'}}>NUESTRA COLECCIÓN</h2>
      <h5>Estilo Urbano para cada ocasión</h5>
      <div className="products-grid">
        <Card name="Camiseta Básica Urban" price="29" img="👕" />
        <Card name="Jeans Slim fit" price="89" img="👖" />
        <Card name="Sudadera Overzise" price="65" img="🧥" />
        <Card name="Chaqueta Bomber" price="120" img="🧥" />
        <Card name="Gorra Snapback" price="35" img="🧢" />
        <Card name="Zapatillas Urban" price="95" img="👟" />
      </div>
    </div>
    <Footer />
  </>
);
export default Productos;