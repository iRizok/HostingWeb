import React from "react";
import "./styles/clientes.css"
import amazonLogo from "../assets/clients/amazonLogo.png"
import facebookLogo from "../assets/clients/facebookLogo.png"
import netflixLogo from "../assets/clients/netflixLogo.png"
import ytLogo from "../assets/clients/ytLogo.png"

const Clientes = () => {

    const abrirEnlaceEnNuevaPestana = (url) => {
        window.open(url, "_blank");
    };

    return (
        <div>
            <div className="clientes-Titulo">
                <h1 id="h1-Clientes">Clientes</h1>
                <p id="p-Clientes">Algunos de nuestros clientes mas leales</p>
            </div>
            <div className="clientes-container">
                <div className='clientes-card' onClick={() => abrirEnlaceEnNuevaPestana('https://www.facebook.com/')}>
                    <h2 id="nombre-Cliente">Facebook</h2>

                    <img id="cliente-Img" src={facebookLogo} alt="Amazon Logo" />
                </div>
                <div className='clientes-card' onClick={() => abrirEnlaceEnNuevaPestana('https://www.amazon.com/')}>
                    <h2 id="nombre-Cliente">Amazon</h2>

                    <img id="cliente-Img" src={amazonLogo} alt="Amazon Logo" />
                </div>
                <div className='clientes-card' onClick={() => abrirEnlaceEnNuevaPestana('https://www.netflix.com/')}>
                    <h2 id="nombre-Cliente">Netflix</h2>

                    <img id="cliente-Img" src={netflixLogo} alt="Netflix Logo" />
                </div>
                <div className='clientes-card' onClick={() => abrirEnlaceEnNuevaPestana('https://www.youtube.com/')}>
                    <h2 id="nombre-Cliente">YouTube</h2>

                    <img id="cliente-Img" src={ytLogo} alt="Youtube Logo" />
                </div>
            </div>
        </div>
    );
};

export default Clientes;
