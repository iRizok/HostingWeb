// CardComponent.js
import React from "react";
import './styles/compañia.css'; // Asegúrate de importar tu archivo de estilos

const CompañiaCard = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h2 id="nombre-Servicio">STARTER</h2>
        <h3 id="precio-Normal">$500</h3>
        <h3 id="precio-Oferta">$250 </h3><p id="por-Año">/año</p>
        <p id="eslogan-Servicio">¡Todo lo que necesitas para comenzar!</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Espacio Web : 10G</li>
          <li id="elementos-Servicio">Registro de dominio</li>
          <li id="elementos-Servicio">Configuracion ilimitada</li>
          <li id="elementos-Servicio">Transferencia ilimatada</li>
        </ul>
        <button id="detalles">Detalles</button>
      </div>

      <div className='card'>
        <h2 id="nombre-Servicio">BASICO</h2>
        <h3 id="precio-Normal">$955</h3>
        <h3 id="precio-Oferta">$455</h3><p id="por-Año">/año</p>
        <p id="eslogan-Servicio">¡La mejor solución para grandes proyectos!</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Espacio Web : 100G</li>
          <li id="elementos-Servicio">Incluye un dominio gratis</li>
          <li id="elementos-Servicio">Configuración Instantanea</li>
          <li id="elementos-Servicio">Mas de 140 Apps</li>
          <li id="elementos-Servicio">SiteBuilder con plantillas</li>
        </ul>
        <button id="detalles">Botón 2</button>
      </div>

      <div className='card'>
        <h2 id="nombre-Servicio">Título 3</h2>
        <h3 id="precio-Normal">Subtítulo 3.1</h3>
        <h3 id="precio-Oferta">Subtítulo 3.2</h3>
        <p id="eslogan-Servicio">Renglón de texto de la tarjeta 3.</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Elemento X</li>
          <li id="elementos-Servicio">Elemento Y</li>
          <li id="elementos-Servicio">Elemento Z</li>
        </ul>
        <button id="detalles">Botón 3</button>
      </div>

      <div className='card'>
        <h2 id="nombre-Servicio">Título 4</h2>
        <h3 id="precio-Normal">Subtítulo 4.1</h3>
        <h3 id="precio-Oferta">Subtítulo 4.2</h3>
        <p id="eslogan-Servicio">Renglón de texto de la tarjeta 4.</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Elemento Alpha</li>
          <li id="elementos-Servicio">Elemento Beta</li>
          <li>Ele id="elementos-Servicio"mento Gamma</li>
        </ul>
        <button id="detalles">Botón 4</button>
      </div>
    </div>
  );
};

export default CompañiaCard;
