// Footer.js
import React from "react";
import "./styles/footer.css"; // Archivo de estilos CSS
import twitterIcon from "../assets/footer/twitterIcon.png"
import facebookIcon from '../assets/footer/facebookIcon.png'
import mapsIcon from "../assets/footer/Google-Maps-icon.png"
import { registerSugerencias } from '../services/sugerencias.services.js'
import { Link } from "react-router-dom";

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const nombre = document.getElementById('sugerenciastxt-nombre').value;
    const correo = document.getElementById('sugerenciastxt-correo').value;
    const mensaje = document.getElementById('sugerenciastxt-mensaje').value;

    try {
        // Realiza la solicitud a la API
        await registerSugerencias({ nombre, correo, mensaje });

        // Maneja el éxito, puedes mostrar un mensaje, redirigir, etc.
        console.log('Sugerencia enviada con éxito');
    } catch (error) {
        // Maneja el error, puedes mostrar un mensaje de error, loggear, etc.
        console.error('Error al enviar la sugerencia:', error);
    }
};


const Footer = ({ isLoggedIn, isAdmin, onLogout })=> {
    console.log(isLoggedIn)
    return (
        <footer className="footer">
            <div className="footer-section">
                {/* Contenido para la primera sección del footer */}
                <label htmlFor="interes" id="interes" name="interes">Esto podria interesarte:</label>
                <br />
                <label htmlFor="copy" id="copy" name="copy">The best host C 2014</label>
                <br />
                <label id="politicas">Politicas de Privacidad</label>
                <br />
                <div>
      {/* Otro contenido del pie de página aquí */}
      {isLoggedIn && isAdmin ? (
  // Si está logueado como administrador, muestra el botón "Cerrar Sesión"
  <button className="small-button" onClick={onLogout}>
    Cerrar Sesión
  </button>
) : (
  // Si no está logueado o no es administrador, muestra el botón "Iniciar Sesión"
  !isLoggedIn && (
    <Link to="/iniciar-sesion" className="small-button">
      Iniciar Sesión
    </Link>
  )
)}
    </div>

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
                <label htmlFor="address" id="address" name="street">202 Bitters Road</label>
                <br />
                <label htmlFor="address" id="address" name="city">Sant Antonio, TX</label>
                <br />
                <label htmlFor="address" id="address" name="postalcode">23844</label>
                <br />
                <label htmlFor="maps" id="maps" name="maps">View Maps </label>
                <img id="mapsIcon" src={mapsIcon} alt="Icono de google Maps" />
            </div>
            <div className="footer-section">
                {/* Contenido para la tercera sección del footer */}
                <div className="left-section">
                    <label htmlFor="contacto" id="interes" name="contacto">
                        Conéctate con The Best Host
                    </label>
                    <label htmlFor="nombre" id="sugerencias">
                        Nombre (requerido):
                    </label>
                    <input type="text" id="sugerenciastxt-nombre" name="nombre" />
                    <label htmlFor="correo" id="sugerencias">
                        Correo (requerido):
                    </label>
                    <input type="email" id="sugerenciastxt-correo" name="correo" />
                    <button onClick={handleFormSubmit}>Enviar sugerencia</button>
                </div>


            </div>
            <div className="footer-section">
                <div className="right-section">
                    <label htmlFor="redes" id="redes" name="facebook">facebook <img id="redesIcon" src={facebookIcon} alt="facebook Icon" />
                        twitter <img id="redesIcon" src={twitterIcon} alt="Twitter Icon" /></label>

                    <label htmlFor="sugerencias" id="sugerencias">Sugerencia o Mensaje:</label>
                    <textarea id="sugerenciastxt-mensaje" name="sugerencias" rows="4" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
