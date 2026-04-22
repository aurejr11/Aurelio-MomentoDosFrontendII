
import Navbar from "../components/Navbar";
import Formulario from "../components/Formulario";

function Contacto() {
  return (
    <>
      <Navbar />

      <section className="px-10 py-20 bg-[#0e0a27] text-white">
        <h2 className="text-3xl mb-6">CONTACTO</h2>
        <Formulario />
      </section>
    </>
  );
}

export default Contacto;