"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class TeamSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 1000,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true
    };
    return (
      <Slider {...settings}>
        <div className="card sliderOne"></div>
        <div className="card sliderTwo"></div>
        <div className="card sliderThree"></div>
        <div className="card sliderFour"></div>
        <div className="card sliderFive"></div>
      </Slider>
    );
  }
}
