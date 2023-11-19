// Navbar.js
import React from "react";
import "./styles/navbar.css"; // Archivo de estilos CSS
import logo from '../assets/navbar/Vista (16).png'
import ayudaimg from "../assets/navbar/iMessage_icon.png"
import phone_icon from "../assets/navbar/phone_icon.png"

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-content">
          <img id="logo" src={logo} alt="logo"/>
          <label htmlFor="about" id="about" name="about">
            Hospedaje WEB Líder Mundial
          </label>
        </div>
        <div className="right-content">
          <div className="right-labels">
            <label htmlFor="preguntas" id="preguntas" name="preguntas">
              Preguntas? Contacto de ventas:
            </label>
            <label htmlFor="telefono" id="telefono" name="telefono">
              <img id="telefonoimg" src={phone_icon} alt="telefono"/> (844) 4145676
            </label>
            <label htmlFor="ayuda" id="ayuda" name="ayuda">
              Ayuda en línea.<img id="ayudaimg" src={ayudaimg} alt="ayuda"/>
            </label>
          
          <ul className="nav-btns">
            <li id="compañiaNavBtn" name="compañiaNavBtn">
              Compañia
            </li>
            <li id="servicioNavBtn" name="servicioNavBtn">
              Servicios
            </li>
            <li id="solucionesNavBtn" name="solucionesNavBtn">
              Soluciones
            </li>
            <li id="clientesNavBtn" name="clientesNavBtn">
              Clientes
            </li>
            <li id="contactoNavBtn" name="contactoNavBtn">
              Contacto
            </li>
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
