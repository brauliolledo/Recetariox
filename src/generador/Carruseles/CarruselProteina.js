import { Carrusel } from "../Carrusel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { PureComponent } from "react";
import Slider from "react-slick";
import '../Carrusel.css'

export class CarruselProteina extends Carrusel {
    render() {

        var settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (

            <Slider id="slider" className="col-11" {...settings}>
                <div class="carousel-multi-item-2">
                    <br></br>
                    <h3>Seleccionar Proteina</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/vacuno.png"
                                />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/pollo.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/salmon.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/atun.png"
                                />
                        </div>
                    </div>

                </div>


                <div class="carousel-multi-item-2">
                    <br></br>
                    <h3>Seleccionar Proteina</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/lentejas.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/porotos.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/garbanzos.png"
                               />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="/img/proteinas/huevo.png"
                                 />
                        </div>
                    </div>
                </div>

            </Slider>
        );
    }
}