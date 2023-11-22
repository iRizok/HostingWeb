// ServiciosCard.js
import React, { useState, useEffect } from "react";
import {
  registerPlan,
  listPlanes,
  findPlan,
  updatePlan,
  deletePlan
} from "../services/servicios.services.js"; // Importa tus funciones API
import "./styles/servicios.css"

const Servicios = () => {
  const [planes, setPlanes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await listPlanes();
      const data = await response.json();
      setPlanes(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente

  const handleDownload = async (id) => {
    try {
      console.log(id)
      const response = await findPlan(id);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `plan_${id}.pdf`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading PDF:", error);
    }
  };


  return (
    <div className="plan-list-container">
      <h1>Servicios</h1>
      <p>Contrata el tuyo ahora</p>
      <div className="plan-list-wrapper">
        <ul className="plan-list">
          {planes.map((plan) => (
            <li key={plan._id} className="plan-item">
              <div className="plan-title">{plan.nombre}</div>
              <div className="plan-description">${plan.precio}</div>
              <ul className="plan-characteristics">
                {Object.entries(plan.caracteristicas).map(([key, value]) => (
                  <li key={key} className="plan-characteristic-item">
                    <strong>{key}:</strong> {value}
                  </li>
                ))}
              </ul>
              <button
                className="download-button"
                onClick={() => handleDownload(plan._id)}
              >
                Descargar PDF
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Servicios;
