import React, { PureComponent } from "react";
import "./Navbar.css"

export default class Navbar extends PureComponent {
    render() {
        return (
        <div class="navbar">
            <a href="index.html">Inicio</a>
            <a href="how.html">¿Cómo funciona?</a>
            <a href="download.html">Descarga</a>
            <a href="contact.html">Contacto</a>
        </div>
        );
    }
}