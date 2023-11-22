import Chart from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";

import "./styles/DashboardStyle.css";

const Dashboard = () => {
  const [solicitudesData, setSolicitudesData] = useState({
    inactivos: 0,
    activos: 0,
  });
  const [contradosData, setConstratosData] = useState({
    starter: 0,
    basico: 0,
    nolimite: 0,
    avanzado: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const API = "https://hostingwebapi.onrender.com/contratos";
        const response = await fetch(`${API}/listarVigentes`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setSolicitudesData({
          inactivos: parseInt(data.inactivos),
          activos: parseInt(data.activos),
        });

        const response2 = await fetch(`${API}/listarNContratos`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data2 = await response2.json();
        console.log(data2)
        setConstratosData({
          starter: parseInt(data2.starter_contratados),
          basico: parseInt(data2.basico_contratados),
          nolimite: parseInt(data2.nolimite_contratados),
          avanzado: parseInt(data2.avanzado_contratados),
        })
        console.log(contradosData);
      } catch (error) {
        console.error("Error al obtener datos de solicitudes:", error);
      }
    };

    fetchData();
  }, []); // Este efecto se ejecuta una vez al cargar el componente

  const solicitudesChartData = {
    labels: ["Inactivos", "Activos"],
    datasets: [
      {
        label: "Total de Contratos",
        data: [solicitudesData.inactivos, solicitudesData.activos],
        backgroundColor: ["#FF5activos3FF49"], // Colores para las barras
      },
    ],
  };

  const serviciosChartData = {
    labels: ["Starter", "Básico", "No Límite", "Avanzado"],
    datasets: [
      {
        label: "Número de Clientes por Servicio",
        data: [
          contradosData.starter,
          contradosData.basico,
          contradosData.nolimite,
          contradosData.avanzado,
        ],
        backgroundColor: ["#FF5733", "#33FF49", "#3366FF", "#FF33A6"], // Colores para las barras
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard con todas las Solicitudes</h1>

      {/* Gráfica de pastel para el número de contratos vigentes */}
      {solicitudesData && (
        <Doughnut data={solicitudesChartData} options={options} />
      )}

      {/* Gráfica de barras para el número de clientes por servicio */}
      <h2>Número de Servicios contratados</h2>
      {contradosData && <Bar data={serviciosChartData} options={options} />}
    </div>
  );
};

export default Dashboard;
