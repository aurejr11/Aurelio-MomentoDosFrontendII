// se crea y se importa el componente header, card y navbar para la pagina de productos

import Navbar from "../components/Navbar";
import Card from "../components/Card";

function Productos() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 bg-[#0e0a27] text-white">
        <h2 className="text-3xl font-bold mb-10">Productos</h2>

        <div className="grid grid-cols-3 gap-6">
          <Card titulo="DISEÑO UNICO" descripcion="Piezas exclusivas con estética urbana y minimalista" />
          <Card titulo="CALIDAD PREMIUM" descripcion="Materiales de alta calidad para máxima durabilidad" />
          <Card titulo="ENVÍO RÁPIDO" descripcion="Entrega express en 24 - 48 horas" />
        </div>
      </section>
    </>
  );
}

export default Productos;