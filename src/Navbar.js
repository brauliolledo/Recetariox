import React, { PureComponent } from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar">
                <Link className="itemNavegacion" to="/">Inicio</Link>
                <Link className="itemNavegacion" to="/como">¿Cómo funciona?</Link>
                <Link className="itemNavegacion" to="/descarga">Descarga</Link>
                <Link className="itemNavegacion" to="/contacto">Contacto</Link>

            </div>
        );
    }
}