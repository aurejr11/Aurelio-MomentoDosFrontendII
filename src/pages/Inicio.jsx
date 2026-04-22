// Se crea el inicio de la pagina con el componente header y navbar para mostrarlo en la pagina principal del proyecto


import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Formulario from "../components/Formulario";

function Inicio() {
  return (
    <>
      <Navbar />
      <Header />
     <Footer />
     <Formulario />
     <Card/>
    </>
  );
}

export default Inicio;