import { Carrusel } from "../Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { PureComponent } from "react";
import Slider from "react-slick";
import '../Carrusel.css'

export class CarruselVerdura extends Carrusel {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <Slider className="col-11" {...settings}>
                <div class="carousel-multi-item-2">
                    <br></br>
                    <h3>Seleccionar Verduras</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/brocoli.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/cebolla.png"
                                 />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/choclo.png"
                                />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/esparrago.png"
                                />
                        </div>
                    </div>

                </div>


                <div class="carousel-multi-item-2">
                <br></br>
                    <h3>Seleccionar Verduras</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/espinaca.png"
                                 />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/papa.png"
                                 />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/tomate.png"
                                />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/verduras/pimenton.png"
                                />
                        </div>
                    </div>
                </div>

            </Slider>
        );
    }
}