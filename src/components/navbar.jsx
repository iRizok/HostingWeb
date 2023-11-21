// Navbar.js
import React from "react";
import "./styles/navbar.css"; // Archivo de estilos CSS
import logo from '../assets/navbar/Vista (16).png'
import ayudaimg from "../assets/navbar/iMessage_icon.png"
import phone_icon from "../assets/navbar/phone_icon.png"

const Navbar = ({ onNavbarButtonClick,isLoggedIn, isAdmin, onLogout}) => {

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
            <li id="compañiaNavBtn" name="compañiaNavBtn"  onClick={() => onNavbarButtonClick(0)}>
              Compañia
            </li>
            <li id="servicioNavBtn" name="servicioNavBtn" onClick={() => onNavbarButtonClick(1)}>
              Servicios
            </li>
            <li id="solucionesNavBtn" name="solucionesNavBtn" onClick={() => onNavbarButtonClick(2)}>
              Soluciones
            </li>
            <li id="clientesNavBtn" name="clientesNavBtn" onClick={() => onNavbarButtonClick(3)}>
              Clientes
            </li>
            <li id="contactoNavBtn" name="contactoNavBtn"onClick={() => onNavbarButtonClick(4)}>
              Contacto
            </li>
            {isLoggedIn && isAdmin && (
            <li id="sugerenciasNavBtn" name="sugerenciasNavBtn"onClick={() => onNavbarButtonClick(5)}>
            Sugerencias
          </li>
          )}
          {isLoggedIn && isAdmin && (
            <li id="solicitudesNavBtn" name="solicitudesNavBtn"onClick={() => onNavbarButtonClick(6)}>
            Editar Planes
          </li>
          )}
          {isLoggedIn && isAdmin && (
            <li id="dashboardNavBtn" name="dashboardNavBtn"onClick={() => onNavbarButtonClick(7)}>
            Dashboard
          </li>
          )}
          </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
