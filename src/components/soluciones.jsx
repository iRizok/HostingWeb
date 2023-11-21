import React from 'react';
import "./styles/soluciones.css";

const SolucionesComponent = () => {
  return (
    <div className="soluciones-container">
      <h2 className="soluciones-title">Nuestras Soluciones</h2>
      <div className="solucion-item" id="solucion1">
        <h3 className="solucion-subtitle">Hospedaje Compartido</h3>
        <p className="solucion-description">
          Ofrecemos planes de hospedaje compartido para proyectos pequeños y medianos.
          Con nuestro servicio, puedes compartir recursos en un servidor con otros clientes.
        </p>
      </div>
      <div className="solucion-item" id="solucion2">
        <h3 className="solucion-subtitle">Servidores Dedicados</h3>
        <p className="solucion-description">
          ¿Necesitas más potencia y control? Nuestros servidores dedicados te ofrecen recursos exclusivos
          para satisfacer las necesidades específicas de tu proyecto.
        </p>
      </div>
      <div className="solucion-item" id="solucion3">
        <h3 className="solucion-subtitle">Registro de Dominios</h3>
        <p className="solucion-description">
          Facilitamos el registro y administración de nombres de dominio. Encuentra el dominio perfecto
          para tu sitio web y gestiónalo de manera sencilla.
        </p>
      </div>
      <div className="solucion-item" id="solucion4">
        <h3 className="solucion-subtitle">Soporte 24/7</h3>
        <p className="solucion-description">
         Ofrecemos soporte técnico las 24 horas del día, los 7 días de la semana. Estamos aquí para 
         ayudarte en cualquier momento.
        </p>
      </div>
    </div>
  );
};

export default SolucionesComponent;
