// Sidebar.js
import React, { useState } from "react";
import "./styles/sidebarAcordeon.css";
import techSupportIcon from "../assets/sidebarAcordeon/img-soporte-tecnico.png"
import webHostIcon from "../assets/sidebarAcordeon/webHosting.png"
import dedServerIcon from "../assets/sidebarAcordeon/dedicated_server.png"
import guaranteeIcon from "../assets/sidebarAcordeon/guarantee_icon.png"
import whyUsIcon from "../assets/sidebarAcordeon/whyUs.png"
import centerSupportIcon from "../assets/sidebarAcordeon/support_help.png"
import domainsIcon from "../assets/sidebarAcordeon/domain-names.png"
import servicesIcon from "../assets/sidebarAcordeon/Network-Service-icon.png"
import techIcon from "../assets/sidebarAcordeon/System-Preferences-icon.png"
import resellersIcon from "../assets/sidebarAcordeon/reseller_icon.png"
import faqIcon from "../assets/sidebarAcordeon/faq icon.png"

const Sidebar = () => {


  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const buttons = [
    { icon: webHostIcon, title: "Web Hosting", content: "Contenido del botón 1" },
    { icon: dedServerIcon, title: "Servidor Dedicado", content: "Contenido del botón 2" },
    { icon: guaranteeIcon, title: "Poliza de Garantia", content: "Contenido del botón 3" },
    { icon: whyUsIcon, title: "¿Porque Nosotros?", content: "Contenido del botón 3" },
    { icon: centerSupportIcon, title: "Centro de Ayuda", content: "Contenido del botón 3" },
    { icon: domainsIcon, title: "Dominios", content: "Contenido del botón 3" },
    { icon: servicesIcon, title: "Mas Servicios", content: "Contenido del botón 3" },
    { icon: techIcon, title: "Tecnologia", content: "Contenido del botón 3" },
    { icon: resellersIcon, title: "Resellers", content: "Contenido del botón 3" },
    { icon: faqIcon, title: "Preguntas Frecuentes", content: "Contenido del botón 3" },

    // ... más botones
  ];

  return (
    <div className="sidebar-container">
      <div className="sidebar-head">

        <p> <img id="btnIcon" src={techSupportIcon} alt="Tech Support Icon" /> 24/7 Asistencia Técnica</p>
      </div>
      <div className="sidebar-button-container">

        {buttons.map((button, index) => (
          <div key={index} className={`sidebar-button ${index === activeIndex ? "active" : ""}`}>
            <button onClick={() => handleClick(index)}><img id="btnIcon" src={button.icon} alt={button.title} className="button-icon" />
              {button.title}</button>
            {index === activeIndex && <div className="content">{button.content}</div>}
          </div>
        ))}
      </div>
      <div className="conectados-container">
        <p id="onlineUsers">Conectados: </p>
        <p id="onlineUsers">Visitas: </p>
      </div>
    </div>
  );
};

export default Sidebar;
