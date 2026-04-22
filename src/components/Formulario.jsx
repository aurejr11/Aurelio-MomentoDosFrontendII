// Creacion de formulario de contacto 
import { useState } from "react";

function Formulario() {
  const [datos, setDatos] = useState({
    nombre: "",
    correo: "",
  });

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(datos);
    localStorage.setItem("formulario", JSON.stringify(datos));
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md"
    >
      <input
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        className="p-3 rounded bg-gray-200 text-black"
      />

      <input
        name="correo"
        placeholder="Correo"
        onChange={handleChange}
        className="p-3 rounded bg-gray-200 text-black"
      />

      <button className="bg-pink-500 text-white p-3 rounded hover:bg-pink-600">
        Enviar
      </button>
    </form>
  );
}

export default Formulario;