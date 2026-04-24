// se crea y se importa el componente header, card y navbar para la pagina de productos

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";

const Productos = () => (
  <>
    <Navbar />
    <div className="products-container">
      <h2 style={{textAlign: 'center', marginBottom: '30px'}}>NUESTRA COLECCIÓN</h2>
      <div className="products-grid">
        <Card name="Camiseta Básica" price="29" img="👕" />
        <Card name="Jeans Slim" price="89" img="👖" />
        <Card name="Sudadera" price="65" img="🧥" />
        <Card name="Chaqueta Bomber" price="120" img="🧥" />
        <Card name="Gorra Urban" price="35" img="🧢" />
        <Card name="Zapatillas" price="95" img="👟" />
      </div>
    </div>
    <Footer />
  </>
);
export default Productos;