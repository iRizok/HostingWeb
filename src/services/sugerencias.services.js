const API = 'https://hostingwebapi.onrender.com/sugerencias'

export const registerSugerencias = data => fetch(`${API}/agregar`, { 
    method: "POST",
    body: JSON.stringify({
        "nombre": data.nombre,
        "correo": data.correo,
        "mensaje": data.mensaje
      }),
    headers: {
      "Content-Type": "application/json"
    }
  });

  export const listSugerencias = () => fetch(`${API}/listar`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });

  export const excelSugerencias = () => fetch(`${API}/exportarSugerencias`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  // Buscar un admin por ID
  export const findSugerencias = (idSugerencia) => fetch(`${API}/buscar/${idSugerencia}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  // Actualizar un admin por ID
  export const updateSugerencias = (idSugerencia, data) => fetch(`${API}/actualizar/${idSugerencia}`, {
    method: "PUT",
    body: JSON.stringify({
        "nombre": data.nombre,
        "correo": data.correo,
        "mensaje": data.mensaje
    }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  
  // Eliminar un admin por ID
  export const deleteSugerencias = (idSugerencia) => fetch(`${API}/eliminar/${idSugerencia}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });