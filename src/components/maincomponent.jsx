// CombinedSidebar.js
import React, { useState } from "react";
import Sidebar from "./sidebarAcordeon";
import SidebarAbout from "./sidebarAbout";
import "./styles/maincomponent.css";
import CompañiaCard from "./compañia";
import Servicios from "./servicios";
import Soluciones from "./soluciones";
import Clientes from "./clientes";
import Contacto from "./contacto";
import ListaSugerencias from "./sugerencias";
import PlanCrud from "./crudPlanes";

const CombinedSidebar = ({ activeComponentIndex }) => {
  let activeComponent;

  switch (activeComponentIndex) {
    case 0:
      activeComponent = <CompañiaCard />;
      console.log(activeComponentIndex)
      break;
    case 1:
      activeComponent = <Servicios />;
      console.log(activeComponentIndex)
      break;
    case 2:
      activeComponent = <Soluciones />;
      console.log(activeComponentIndex)
      break;
    case 3:
      activeComponent = <Clientes />;
      console.log(activeComponentIndex)
      break;
    case 4:
      activeComponent = <Contacto />;
      console.log(activeComponentIndex)
      break;
    case 5:
      activeComponent = <ListaSugerencias />;
      console.log(activeComponentIndex)
      break;
    case 6:
      activeComponent = <PlanCrud />;
      console.log(activeComponentIndex)
      break;
    // Añade más casos según sea necesario
    default:
      activeComponent = <CompañiaCard />;
      console.log("dasd", activeComponentIndex)
      break;
  }

  return (
    <div className="combined-sidebar-container">
      <div className="combined-sidebar-left">
        <Sidebar />
      </div>
      <div className="combined-middle">
        {activeComponent}
      </div>
      <div className="combined-sidebar-right">
        <SidebarAbout />
      </div>
    </div>
  );
};

export default CombinedSidebar;
