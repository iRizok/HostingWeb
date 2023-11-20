import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './styles/slideshow.css';
import arrowIcon from "../assets/slideshow/arrow-icon.png"
import linuxIcon from "../assets/slideshow/linux-icon.png"
import redDot from "../assets/slideshow/red-dot.png"
import serverBg from "../assets/slideshow/server.png"
import wey from "../assets/slideshow/wey.png"
import windowsIcon from "../assets/slideshow/windows-logo.png"
import AliceCarousel from 'react-alice-carousel';

import "react-alice-carousel/lib/alice-carousel.css";

const items = [
    <div className="item" data-value="1"><img id="wey1" src={wey} alt="" /></div>,
    <div className="item" data-value="2"><img id="wey2ss" src={wey} alt="" /></div>,
    <div className="item" data-value="3"><img id="wey3" src={wey} alt="" /></div>,
    <div className="item" data-value="4"><img id="wey4" src={wey} alt="" /></div>,
];

const SliderComponent = () => {
    return (
        <div className="three-part-container">
            <div className="first-part">
                <h4 id='title-show'>Servidores:</h4>
                <img id="linuxIcon" src={linuxIcon} alt='Linux Logo' />
                <br />
                <img id='winIcon' src={windowsIcon} alt='Windows Logo' />
            </div>
            <div className="second-part">
                <div className='info-container'>
                    <h4 id='title-show'>El mejor WEb Hosting por solo $60MN al mes</h4>
                    <ul id='info-ul'>
                        <li id='info-li'><img id="bullet-point" src={arrowIcon} alt="Bullet Point" /> Ilimitados dominios en el Hosting</li>
                        <li id='info-li'><img id="bullet-point" src={arrowIcon} alt="Bullet Point" /> Espacio ilimitado</li>
                        <li id='info-li'><img id="bullet-point" src={arrowIcon} alt="Bullet Point" /> Ilimitada transferencia de archivos</li>
                        <li id='info-li'><img id="bullet-point" src={arrowIcon} alt="Bullet Point" /> Ilimitadas cuentas de correo</li>
                        <li id='info-li'><img id="bullet-point" src={arrowIcon} alt="Bullet Point" /> Gratis un nombre de dominio</li>
                    </ul>

                    <button id='info-btn'>Ver mas</button>
                </div>
            </div>
            <div className="third-part">
                <AliceCarousel
                    mouseTracking
                    items={items}
                    autoHeight="true"
                    controlsStrategy="alternate"
                    autoPlayInterval={2000}
                    autoPlayDirection="rtl"
                    autoPlay={true}
                    fadeOutAnimation={true}
                    disableAutoPlayOnAction={true}
                    showSlideInfo={true}
                    stopAutoPlayOnHover={true}
                    itemsOnSlide={0}
                    disableButtonsControls="true"
                />
            </div>
        </div>
    );
};

export default SliderComponent;
