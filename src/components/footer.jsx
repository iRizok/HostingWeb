// Footer.js
import React from "react";
import "./styles/footer.css"; // Archivo de estilos CSS

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                {/* Contenido para la primera sección del footer */}
                <label htmlFor="interes" id="interes" name="interes">Esto podria interesarte:</label>
                <br />
                <label htmlFor="copy" id="copy" name="copy">The best host C 2014</label>
            </div>
            <div className="footer-section">
                {/* Contenido para la segunda sección del footer */}
                <label htmlFor="condiciones" id="condiciones" name="terminos">Terminos y condiciones</label>
                <label htmlFor="condiciones" id="condiciones" name="politicas">Politicas de privacidad</label>
                <br />
                <label htmlFor="condiciones" id="condiciones" name="transferencias">Transferencias de Dominios</label>
                <label htmlFor="condiciones" id="condiciones" name="precios">Precios de Dominios</label>
                <br />
                <br />
                <br />
                
                <label htmlFor="address" id="address" name="street">202 Bitters Road</label>
                <br />
                <label htmlFor="address" id="address" name="city">Sant Antonio, TX</label>
                <br />
                <label htmlFor="address" id="address" name="postalcode">23844</label>

            </div>
            <div className="footer-section">
                {/* Contenido para la tercera sección del footer */}
                <div className="left-section">
                    <label htmlFor="contacto" id="interes" name="contacto">Conectate con The Best Host</label>
                    <label htmlFor="nombre" id="sugerencias">Nombre (requerido):</label>
                    <input type="text" id="sugerenciastxt" name="nombre" />
                    <label htmlFor="correo" id="sugerencias">Correo (requerido):</label>
                    <input type="email" id="sugerenciastxt" name="correo" />
                    <button>Enviar sugerencia</button>
                </div>
              
            </div>
            <div className="footer-section">
            <div className="right-section">
                    <label htmlFor="redes" id="redes" name="facebook">facebook</label>
                    <label htmlFor="redes" id="redes" name="twitter">twitter</label>
                    <label htmlFor="sugerencias" id="sugerencias">Sugerencia o Mensaje:</label>
                    <textarea id="sugerenciastxt" name="sugerencias" rows="4" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
