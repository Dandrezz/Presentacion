import React from 'react';
import './CustomNavbar.css';

const CustomNavbar = () => {
    return (
        <ul>
            <li><a href="#home">Inicio</a></li>
            <li style={{ float: "right" }}><a class="active" href="#about">Sobre la empresa</a></li>
            <li style={{ float: "right" }}><a href="#contact">Contactenos</a></li>
            <li style={{ float: "right" }}><a href="#news">Noticias</a></li>
        </ul>
    )
}

export default CustomNavbar;
