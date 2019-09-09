import React, { PureComponent } from "react";
import './Contacto.css'
import { SelectorPais } from "./SelectorPais";

export default class Contacto extends PureComponent {
    render() {
        return (
            <div id="contactoDiv" class="d-flex align-items-center">
                <div class="text-center container-fluid row">
                    <span class="col-1"></span>
                    <div id="formularioDiv" class="col-11 text-center row">
                        <div class="col-12">
                            <h1 class="display-3">Contáctanos</h1>
                            <small>Proyecto informático creado por José Cabello
                        y Braulio Lledó para Duoc UC</small>
                        </div>
                        <div class="col-2"> </div>
                        <div class="mt-4 col-8 h-50 row">
                            <textarea id="mensajeTextArea" class="col-12"></textarea>
                            <br />

                            <div class="text-left">
                                Indica tu información de contacto, y te responderemos a la brevedad.
                            </div>
                        </div>

                    </div>
                    <span class="col-1"></span>

                </div>



            </div>
        );
    }
}