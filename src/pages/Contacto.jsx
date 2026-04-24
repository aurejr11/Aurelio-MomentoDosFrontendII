
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contacto = () => (
  <>
    <Navbar />
    <section className="contact-wrapper">
      <div className="contact-info">
        <h2>CONTACTO</h2>
        <p>¿Tienes alguna pregunta? Escríbenos.</p>
        <div style={{marginTop: '30px'}}>
          <p>📍 Calle Urban Style 123</p>
          <p>📞 +34 911 23 45 67</p>
          <p>📧 info@urbanthreads.com</p>
        </div>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-group"><input type="text" placeholder="Nombre" /></div>
          <div className="form-group"><input type="email" placeholder="Email" /></div>
          <div className="form-group">
            <select>
              <option>Selecciona un asunto</option>
            </select>
          </div>
          <div className="form-group"><textarea placeholder="Mensaje" rows="4"></textarea></div>
          <button type="button" className="btn-add" style={{width: '100%', padding: '15px'}}>ENVIAR MENSAJE</button>
        </form>
      </div>
    </section>
    <Footer />
  </>
);
export default Contacto;