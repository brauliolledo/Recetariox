import React, { PureComponent } from "react";
import './Contacto.css'

export default class Contacto extends PureComponent
{
    render() { 
        return (
            <div id="contactoDiv" class="d-flex align-items-center">
                <div id="formularioDiv" class="text-center w-100">
                    <h1 class="display-3">Contáctanos</h1>
                    <small>Proyecto informático creado por José Cabello 
                        y Braulio Lledó para Duoc UC</small>
                    <br/>
                    <textarea class="mt-4 w-50 h-100" id="mensajeTextArea"></textarea>
                </div>
            </div>
        );
    }
}