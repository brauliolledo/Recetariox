import React, { PureComponent } from 'react';
import { SelectorDePais } from './SelectorDePais';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'

import { render } from 'react-dom'
import { useAlert } from "react-alert";

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}



export class FormularioContacto extends PureComponent {

    constructor() {
        super();
        this.state = {
            nombre: '',
            correoElectronico: ''
        };

        this.EnviarMensajeContacto = this.EnviarMensajeContacto.bind(this);

    }

    EnviarMensajeContacto() {
        if (validateEmail(this.state.correoElectronico) == false) {
          
        }
    }

    handleCorreoChange = (e) => {
        this.setState({
            correoElectronico: e.target.value
        })
    }

    render() {
        return (
            <div id="formularioDiv" class="col-11 text-center row">
                <div class="col-12">
                    <h1 class="display-3">Contáctanos</h1>
                    Proyecto informático creado por José Cabello
                y Braulio Lledó para Duoc UC
                        </div>
                <div class="col-2"> </div>
                <div class="mt-4 col-8 h-50 row mt-3">
                    <textarea id="mensajeTextArea" class="col-12"></textarea>
                    <br />

                    <div class="text-left mt-2 col-12">
                        Indica tu información de contacto, y te responderemos a la brevedad.
                            </div>

                    <div class="row col-12 mt-2 text-left">
                        <input class="form-control col-3" placeholder="Nombre" value={this.state.nombre}></input>
                        <input class="form-control col-3 ml-3 mr-3" placeholder="Correo electrónico" onChange={
                            this.handleCorreoChange
                        } value={this.state.correoElectronico}></input>
                        <SelectorDePais />
                        <button onClick={this.EnviarMensajeContacto} class="btn btn-info ml-4">Enviar</button>
                    </div>
                </div>

            </div>
        )
    }
}