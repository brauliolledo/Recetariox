import React, { PureComponent } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './Carousel.css'

export class Carousel extends React.Component {
    render() {
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <Slider {...settings}>
          <div class="carousel-multi-item-2">
            <h3>1</h3>

            <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(38).jpg"
            alt="Card image cap"/>
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(19).jpg"
            alt="Card image cap"/>
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(42).jpg"
            alt="Card image cap"/>
        </div>
      </div>

      <div class="col-md-3 mb-3">
        <div class="card">
          <img class="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(8).jpg"
            alt="Card image cap"/>
        </div>
      </div>

          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
    }
  }