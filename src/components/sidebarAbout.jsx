import React, { useState } from "react";
import './styles/sidebarAbout.css'
import wey2 from "../assets/sidebarAbout/wey2.png"
import javaIcon from "../assets/sidebarAbout/java_logo.png"
import joomlaIcon from "../assets/sidebarAbout/joomla_logo.png"
import ciscoIcon from "../assets/sidebarAbout/logo_cisco.png"
import mySqlIcon from "../assets/sidebarAbout/mysql.png"
import oracleIcon from "../assets/sidebarAbout/Oracle_logo.png"
import phpIcon from "../assets/sidebarAbout/PHP_logo.png"
import sqlServerIcon from "../assets/sidebarAbout/sqlserver.png"
import visualIcon from "../assets/sidebarAbout/visual_studio_logo.png"
import wordpressIcon from "../assets/sidebarAbout/Wordpress_logo.png"

const SidebarAbout = () => {


    const [activeIndex, setActiveIndex] = useState(null);


    return (
        <div className="sidebar-container-about">
            <img id="wey2" src={wey2} alt="Executive man" />
            <div className="sidebar-about-text">

                <p id="text-sb">
                    La máxima calidad en hosting al mejor precio. Los planes incluyen todo lo que necesites.
                    Mayor rendimiento y máxima seguridad para tu sitio Web.
                </p>

                <p id="text-sb">The Best Host te ofrece el más alto nivel de confibialidad gracias a nuestra georredundancia:
                    lo que significa que tu página web estará almacenada en dos centros de datos de alto rendimiento
                    independientes localizados en distintos lugares</p>

                <p id="text-sb">
                    Si tienes alguna pregunta puedes ponerte en contacto con nosotros a:
                </p>

                <p id="mail-sb">
                    help@thebesthost.com
                </p>
            </div>
            <div>
                <p id="text-img-sb">Contamos con la mejores tecnologías:</p>
                <img id="techImg" src={ciscoIcon} alt="Cisco Logo" />
                <img id="techImg" src={phpIcon} alt="PHP Logo" />
                <img id="techImg" src={mySqlIcon} alt="mySQL Logo" />
                <br />
                <img id="techImg" src={javaIcon} alt="Java Logo" />
                <img id="techImg" src={visualIcon} alt="Visual Studio Logo" />
                <img id="techImg" src={oracleIcon} alt="Oracle Logo" />
                <br />
                <img id="techImg" src={wordpressIcon} alt="Wordpress Logo" />
                <img id="techImg" src={joomlaIcon} alt="Joomla Logo" />
                <img id="techImg" src={sqlServerIcon} alt="sqlServer Logo" />
            </div>
        </div>
    );
};

export default SidebarAbout;