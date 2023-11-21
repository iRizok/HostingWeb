const API = 'https://hostingwebapi.onrender.com/planes';

export const registerPlan = (data) =>
  fetch(`${API}/agregar`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const listPlanes = () =>
  fetch(`${API}/listar`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const findPlan = (idPlan) =>
  fetch(`${API}/buscar/${idPlan}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const updatePlan = (idPlan, data) =>
  fetch(`${API}/actualizar/${idPlan}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });

export const deletePlan = (idPlan) =>
  fetch(`${API}/eliminar/${idPlan}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
