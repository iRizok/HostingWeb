import React, { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "./styles/LoginStyle.css"
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsCaptchaVerified(true); // Simulación de verificación del captcha para propósitos de demostración
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;
    console.log(username)    

    try {
      
      if (username === "admin") {
        // Si la respuesta de la API indica un inicio de sesión exitoso, redirige a la página de inicio
        onLogin(username, password);
        console.log()
        navigate("/");
      } else {
        // Lógica para mostrar mensajes de error desde la API
       ;
        console.log("Error en el inicio de sesión:");
        setErrorMessage("Credenciales incorrectas."); // Establece el mensaje de error si las credenciales son incorrectas
      }
    } catch (error) {
      // Manejo de errores generales
      console.error("Error en la solicitud de inicio de sesión:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
       
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              placeholder="Ejemplo: usuario123"
              className="input-field-login"
            />
          </div>
          <div className="form-group-pass">
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="input-field-login"
            />
          </div>
          <div className="form-group">
            <ReCAPTCHA
              sitekey="6LcF6cgoAAAAAOAwgY6TiWQPxfVD_DZ40yNH7Ss_"
              onChange={handleCaptchaChange}
              className="g-recaptcha"
            />
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="login-button">
            Acceder
          </button>
        </form>
        
      </div>
    </div>
  );
};

export default Login;
