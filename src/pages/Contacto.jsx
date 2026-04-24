// Se crea la pagina de contacto con un formulario para que los usuarios puedan enviar sus consultas,
//  ademas se muestra la informacion de contacto de la empresa y se importa el componente header y
//  footer para mostrarlo en la pagina de contacto del proyecto

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contacto = () => {
  //Se utiliza el usestate para manejar el estado del formulario de contacto, se crea una funcion para manejar los cambios en los campos del formulario y otra funcion para manejar el envio del formulario, guardando los datos en el localStorage y mostrando un mensaje de confirmacion al usuario.
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Datos del formulario:", form);

    localStorage.setItem("contacto", JSON.stringify(form));

    alert("Mensaje enviado con éxito. ¡Gracias por contactarnos!");

    setForm({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: ""
    });
  };

  return (
    <>
      <Navbar />


      // Se crea la estructura de la pagina de contacto con un formulario y la informacion de contacto de la empresa
      <section className="contact-wrapper">
        <div className="contact-info">
          <h2>CONTACTO</h2>
          <p>¿Tienes alguna pregunta? Nos encantaria escucharte.</p>

          <div style={{ marginTop: '30px' }}>
            <p>📍 Medellin, Barrio Laureles</p>
            <p>📞 +57 312 489 81 74</p>
            <p>📧 info@urbanthreads.com</p>
            <p>⏰ Lunes a Viernes: 9am - 6pm</p>
          </div>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <input 
                type="text" 
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <select 
                name="asunto" 
                value={form.asunto} 
                onChange={handleChange}
              >
                <option value="">Selecciona un asunto</option>
                <option value="pedido">Consulta de pedido</option>
                <option value="producto">Información de producto</option>
                <option value="devolucion">Devoluciones</option>
                <option value="soporte">Soporte técnico</option>
              </select>
            </div>

            <div className="form-group">
              <textarea 
                name="mensaje"
                placeholder="Mensaje"
                rows="4"
                value={form.mensaje}
                onChange={handleChange}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="btn-add" 
              style={{ width: '100%', padding: '15px' }}
            >
              ENVIAR MENSAJE
            </button>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contacto;