import React, { PureComponent } from "react";
import './Generador.css'

export default class Generador extends PureComponent {
    componentDidMount() {
        document.getElementById('comidaBackground').play();
    }

    render() {
        return (
            <p>
                <div id="videoContainerDiv" class="container col-12">
                    <video autoplay loop muted id="comidaBackground" class="col-12">
                        <source src="background_comida.mp4" type="video/mp4"></source>
                    </video>

                    <div class="overlay">
                        <div class="d-flex h-100 text-center align-items-center">
                            <div class="w-100 text-white">
                                <h1 class="display-2">Generador de Recetas</h1>
                            </div>
                        </div>                    
                    </div>
                </div>

            </p>
        );
    }
}