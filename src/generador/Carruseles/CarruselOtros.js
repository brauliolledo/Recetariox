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
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                </div>


                <div class="carousel-multi-item-2">
                <br></br>
                    <h3>Seleccionar Otros Ingredientes</h3>
                    <br></br>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>

                    <div class="col-md-3 mb-3">
                        <div class="card">
                            <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
                                alt="Card image cap" />
                        </div>
                    </div>
                </div>

            </Slider>
        );
    }
}