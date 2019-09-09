import React, { PureComponent } from "react";
import './Contacto.css'
import { SelectorPais } from "./SelectorPais";

export default class Contacto extends PureComponent {
    render() {
        return (
            <div id="contactoDiv" class="d-flex align-items-center">
                <div id="formularioDiv" class="text-center w-100">
                    <h1 class="display-3">Contáctanos</h1>
                    <small>Proyecto informático creado por José Cabello
                        y Braulio Lledó para Duoc UC</small>
                    <br />
                    <textarea class="mt-4 col-lg-6 col-sm-8 h-100" id="mensajeTextArea"></textarea>

                    <div id="infoContactoDiv" class="row">
                        <span class="col-3"></span>
                        <input placeholder="Dirección email" class="form-control col-2"></input>
                        <input placeholder="Nombre completo" class="form-control col-2"></input>
                        <SelectorPais/>
                        <button class="btn btn-light col-1">Enviar</button>
                    </div>
                </div>


            </div>
        );
    }
}