import { Carrusel } from "../Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { PureComponent } from "react";
import Slider from "react-slick";
import '../Carrusel.css'

export class CarruselOtros extends Carrusel{
    render(){

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return(

            <Slider className="col-11" {...settings}>
                
                <div class="carousel-multi-item-2">
                <br></br>
                    <h3>Seleccionar Otros Ingredientes</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/otros/leche.png"
                                />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/otros/mantequilla.png"
                                />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/otros/miel.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/otros/yogurt.png"
                                />
                        </div>
                    </div>
                </div>

            </Slider>
        );
    }
}