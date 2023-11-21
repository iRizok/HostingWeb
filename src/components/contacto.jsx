import React from 'react';
import "./styles/contacto.css";

const Contacto = () => {
  return (
    <div className="contacto-container">
      <h2 className="contacto-title">Contáctanos</h2>
      <div className="contacto-info" id="direccion">
        <h3 className="contacto-subtitle">Dirección</h3>
        <p className="contacto-text">
          202 Bitters Road
          <br />
          San Antonio, TX
          <br />
          23844
        </p>
      </div>
      <div className="contacto-info" id="email">
        <h3 className="contacto-subtitle">Correo Electrónico</h3>
        <p className="contacto-text">info@tuempresa.com</p>
      </div>
      <div className="contacto-info" id="telefono">
        <h3 className="contacto-subtitle">Teléfono</h3>
        <p className="contacto-text">(123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contacto;
