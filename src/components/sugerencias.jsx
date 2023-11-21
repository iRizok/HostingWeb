import React, { useState, useEffect } from 'react';
import { listSugerencias, excelSugerencias } from '../services/sugerencias.services.js';
import "./styles/sugerencias.css";

const ListaSugerencias = () => {
  const [sugerencias, setSugerencias] = useState([]);

  useEffect(() => {
    // Llamada a la API para obtener la lista de sugerencias
    const fetchData = async () => {
      try {
        const response = await listSugerencias();
        const data = await response.json();
        setSugerencias(data);
      } catch (error) {
        console.error('Error al obtener las sugerencias', error);
      }
    };

    fetchData();
  }, []);

  const handleExportExcel = async () => {
    try {
      const response = await excelSugerencias();
      // Obtén el blob del cuerpo de la respuesta
      const blob = await response.blob();
      
      // Crea un objeto URL del blob y crea un enlace para descargar
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'sugerencias.xlsx';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error al exportar sugerencias a Excel', error);
    }
  };

  return (
    <div className="sugerencias-container">
      <h2 id="sugerencias-title">Lista de Sugerencias</h2>
      <button id="export-btn" onClick={handleExportExcel}>Exportar a Excel</button>
      <ul className="sugerencias-list">
        {sugerencias.map((sugerencia) => (
          <li key={sugerencia._id} className="sugerencia-item">
            <strong className="nombre-label">Nombre:</strong> {sugerencia.nombre}
            <br />
            <strong className="correo-label">Correo:</strong> {sugerencia.correo}
            <br />
            <strong className="mensaje-label">Mensaje:</strong> {sugerencia.mensaje}
            <br />
            <strong className="fecha-label">Fecha de Creación:</strong> {new Date(sugerencia.createdAt).toLocaleString()}
            <hr className="separator" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaSugerencias;
