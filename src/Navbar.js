import React, { PureComponent } from "react";
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default class Navbar extends PureComponent {
    render() {
        return (
            <div className="navbar row w-100">

                <span class="col-4"></span>
                <Link className="itemNavegacion col-2" to="/">Inicio</Link>
                <Link className="itemNavegacion col-2" to="/como">¿Cómo funciona?</Link>
                <Link className="itemNavegacion col-2" to="/descarga">Descarga</Link>
                <Link className="itemNavegacion col-2" to="/contacto">Contacto</Link>

            </div>
        );
    }
}