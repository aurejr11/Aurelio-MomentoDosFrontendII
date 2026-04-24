// Creacion de formulario de contacto 
import { useState } from "react";

// Contacto.jsx
const Formulario = () => {
  return (
    <section className="contact-wrapper">
      {/* Columna Izquierda: Información */}
      <div className="contact-info">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>CONTACTO</h2>
        <p style={{ color: '#666', marginBottom: '40px' }}>
          ¿Tienes alguna pregunta? Nos encantaría escucharte.
        </p>
        
        <div className="info-item" style={{ marginBottom: '20px' }}>
          <strong>📍 DIRECCIÓN</strong>
          <p>Calle Urban Style 123, Medellín, Colombia</p>
        </div>
        
        <div className="info-item" style={{ marginBottom: '20px' }}>
          <strong>📞 TELÉFONO</strong>
          <p>+57 300 123 4567</p>
        </div>
        
        <div className="info-item">
          <strong>✉️ EMAIL</strong>
          <p>info@urbanthreads.com</p>
        </div>
      </div>

      {/* Columna Derecha: Formulario Blanco */}
      <div className="contact-form">
        <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>ENVÍANOS UN MENSAJE</h3>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Nombre" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Selecciona un asunto</option>
              <option value="ventas">Ventas</option>
              <option value="soporte">Soporte</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Tu mensaje..." rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-add" style={{ width: '100%', padding: '15px', fontSize: '1rem' }}>
            ENVIAR MENSAJE
          </button>
        </form>
      </div>
    </section>
  );
};

export default Formulario;