// CardComponent.js
import React from "react";
import './styles/compañia.css'; // Asegúrate de importar tu archivo de estilos

const CompañiaCard = () => {
  return (
    <div className='card-container'>
      <div className='card'>
        <h2 id="nombre-Servicio">STARTER</h2>
        <h3 id="precio-Normal">$500</h3>
        <div className="subtitles-container"></div>
        <h3 id="precio-Oferta">$250 </h3><p id="por-Año">/año</p>
        <p id="eslogan-Servicio">¡Todo lo que necesitas para comenzar!</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Espacio Web : 10G</li>
          <li id="elementos-Servicio">Registro de dominio</li>
          <li id="elementos-Servicio">Configuracion ilimitada</li>
          <li id="elementos-Servicio">Transferencia ilimatada</li>
        </ul>
        <br />
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
        <button id="detalles">Detalles</button>
      </div>

      <div className='card'>
        <h2 id="nombre-Servicio">NO LIMITE</h2>
        <h3 id="precio-Normal">$1,548</h3>
        <h3 id="precio-Oferta">$799</h3>
        <p id="eslogan-Servicio">¡Máximo rendimiento para proyectos interactivos y con contenidos dinámicos!</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Espacio Web : ilimitado</li>
          <li id="elementos-Servicio">Incluye 1 dominio gratis</li>
          <li id="elementos-Servicio">Configuración Instantanea</li>
          <li id="elementos-Servicio">Transferencia ilimitada</li>
          <li id="elementos-Servicio">Más de 140 Apps</li>
          <li id="elementos-Servicio">SiteBuilder con plantillas</li>
          <li id="elementos-Servicio">Bases De Datos MySQL : ilimitadas</li>
          <li id="elementos-Servicio">Cuentas de correo : ilimitadas</li>
        </ul>
        <button id="detalles">Detalles</button>
      </div>

      <div className='card'>
        <h2 id="nombre-Servicio">Avanzado</h2>
        <h3 id="precio-Normal">$2,988</h3>
        <h3 id="precio-Oferta">$1,039</h3>
        <p id="eslogan-Servicio">¡Un plan superior, ideal para desarrolladores</p>
        <ul id="lista-Servicio">
          <li id="elementos-Servicio">Sopoetre de expertos en Apps</li>
          <li id="elementos-Servicio">Espacio Web : ilimitado</li>
          <li id="elementos-Servicio">Incluye 1 dominio gratis</li>
          <li id="elementos-Servicio">2GB de memoria RAM garantizados</li>
          <li id="elementos-Servicio">Transferencia ilimitada</li>
          <li id="elementos-Servicio">Más de 140 Apps</li>
          <li id="elementos-Servicio">SiteBuilder con plantillas</li>
          <li id="elementos-Servicio">Bases De Datos MySQL : ilimitadas</li>
          <li id="elementos-Servicio">Cuentas de correo : ilimitadas</li>
        </ul>
        <button id="detalles">Detalles</button>
      </div>
    </div>
  );
};

export default CompañiaCard;
