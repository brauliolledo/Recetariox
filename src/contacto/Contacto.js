import React, { PureComponent } from "react";
import './Contacto.css'
import { SelectorPais } from "./SelectorPais";
import { SelectorDePais } from "./SelectorDePais";
import { FormularioContacto } from "./FormularioContacto";

export default class Contacto extends PureComponent {
    render() {
        return (
            <div id="contactoDiv" class="d-flex align-items-center">
                <div class="text-center container-fluid row">
                    <span class="col-1"></span>
                    <FormularioContacto />
                    <span class="col-1"></span>

                </div>



            </div>
        );
    }
}