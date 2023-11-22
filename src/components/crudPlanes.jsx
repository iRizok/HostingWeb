import React, { useState, useEffect } from "react";
import {
    registerPlan,
    listPlanes,
    findPlan,
    updatePlan,
    deletePlan
} from "../services/servicios.services.js"; // Importa tus funciones API
import "./styles/crudPlanes.css"


const PlanCrud = () => {
    const [planes, setPlanes] = useState([]);
    const [formData, setFormData] = useState({
        nombre: "",
        precio: 0,
        descripcion: "",
        caracteristicas: {
            almacenamiento: "",
            ram: "",
            transferencia: "",
            plantillas: "",
            dominio: "",
            bdd: "",
            correo: "",
            otro: ""
        }
    });
    const [editingId, setEditingId] = useState(null);
    const [planDetailId, setPlanDetailId] = useState(null);

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
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCaracteristicasChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            caracteristicas: {
                ...formData.caracteristicas,
                [name]: value
            }
        });
    };

    const handleCreate = async () => {
        try {
            await registerPlan(formData);
            fetchData();
            setFormData({
                nombre: "",
                precio: 0,
                descripcion: "",
                caracteristicas: {
                    almacenamiento: "",
                    ram: "",
                    transferencia: "",
                    plantillas: "",
                    dominio: "",
                    bdd: "",
                    correo: "",
                    otro: ""
                }
            });
        } catch (error) {
            console.error("Error creating plan:", error);
        }
    };

    const handleUpdate = async () => {
        try {
            await updatePlan(editingId, formData);
            fetchData();
            setEditingId(null);
            setFormData({
                nombre: "",
                precio: 0,
                descripcion: "",
                caracteristicas: {
                    almacenamiento: "",
                    ram: "",
                    transferencia: "",
                    plantillas: "",
                    dominio: "",
                    bdd: "",
                    correo: "",
                    otro: ""
                }
            });
        } catch (error) {
            console.error("Error updating plan:", error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deletePlan(id);
            fetchData();
        } catch (error) {
            console.error("Error deleting plan:", error);
        }
    };

    const handleEdit = async (id) => {
        try {
            const response = await findPlan(id);
            const data = await response.json();
            setFormData(data);
            setEditingId(id);
        } catch (error) {
            console.error("Error fetching plan for edit:", error);
        }
    };

    const handlePlanDetails = async (id) => {
        setPlanDetailId(id === planDetailId ? null : id);
    };

    return (
        <div className="crudContainer">
            <h2>Añadir Nuevo Plan</h2>
            <div className="formContainerCrud">

            <label>Nombre:</label>
            <input id="input-Form"
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleInputChange}
                />
            <br />
            <label>Precio:</label>
            <input id="input-Form"
                type="text"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
                />
            <br />
            <label>Descripción:</label>
            <input id="input-Form"
                type="text"
                name="descripcion"
                value={formData.descripcion}
                onChange={handleInputChange}
                />
            <br />
            <label>Almacenamiento:</label>
            <input id="input-Form"
                type="text"
                name="almacenamiento"
                value={formData.caracteristicas.almacenamiento}
                onChange={handleCaracteristicasChange}
                />
            <br />
            <label>Transferencia:</label>
            <input id="input-Form"
                type="text"
                name="transferencia"
                value={formData.caracteristicas.transferencia}
                onChange={handleCaracteristicasChange}
                />
            <br />
            <label>Dominio:</label>
            <input id="input-Form"
                type="text"
                name="dominio"
                value={formData.caracteristicas.dominio}
                onChange={handleCaracteristicasChange}
                />
            <br />  
            <label>Otro:</label>
            <input id="input-Form"
                type="text"
                name="otro"
                value={formData.caracteristicas.otro}
                onChange={handleCaracteristicasChange}
                />
                <br />
                  <button onClick={handleCreate}>Crear</button>
                </div>
            {/* Agreg
          {/* Otros campos y características */}

            {/* Lista de planes */}
            <h2>Lista de Planes</h2>
            <ul>
                {planes.map((plan) => (
                    <li key={plan._id} className="plan-item">
                        <div className="plan-header">
                            <span onClick={() => handlePlanDetails(plan._id)}>
                                {plan.nombre} - ${plan.precio}
                            </span>
                            <button id="btnCrud" onClick={() => handleEdit(plan._id)} className="edit-button">
                                Editar
                            </button>
                            <button onClick={() => handleDelete(plan._id)} className="delete-button">
                                Eliminar
                            </button>

                        </div>

                        {planDetailId === plan._id && (
                            <div className="plan-details">
                                <strong>Nombre:</strong> {plan.nombre}
                                <br />
                                <strong>Precio:</strong> ${plan.precio}
                                <br />
                                <strong>Descripcion:</strong> ${plan.descripcion}
                                <br />
                                <strong>Almacenamiento:</strong> {plan.caracteristicas.almacenamiento}
                                <br />
                                <strong>Transferencia:</strong> {plan.caracteristicas.transferencia}
                                <br />
                                <strong>Dominio:</strong> {plan.caracteristicas.dominio}
                                <br />
                                <strong>Otro:</strong> {plan.caracteristicas.otro}
                                <br />
                                {/* Mostrar más detalles aquí según sea necesario */}
                            </div>
                        )}

                        {editingId === plan._id && (
                            <div className="plan-edit-form">
                                {/* Formulario de edición */}
                                <label>Nombre:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="nombre"
                                    value={formData.nombre}
                                    onChange={handleInputChange}
                                ></input>
                                <br />
                                <label>Precio:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="precio"
                                    value={formData.precio}
                                    onChange={handleInputChange}
                                />
                                 <br />
                                <label>Descripción:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="descripcion"
                                    value={formData.descripcion}
                                    onChange={handleInputChange}
                                />
                                 <br />
                                <label>Almacenamiento:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="almacenamiento"
                                    value={formData.caracteristicas.almacenamiento}
                                    onChange={handleCaracteristicasChange}
                                />
                                 <br />
                                <label>Transferencia:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="transferencia:"
                                    value={formData.caracteristicas.transferencia}
                                    onChange={handleCaracteristicasChange}
                                />
                                 <br />
                                <label>Dominio:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="dominio"
                                    value={formData.caracteristicas.dominio}
                                    onChange={handleCaracteristicasChange}
                                />
                                 <br />
                                <label>Otros:</label>
                                <input id="input-Form"
                                    type="text"
                                    name="otro"
                                    value={formData.caracteristicas.otro}
                                    onChange={handleCaracteristicasChange}
                                />
                                {/* Agrega más campos aquí según sea necesario */}
                                <br />
                                <button onClick={handleUpdate}>Actualizar</button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlanCrud;