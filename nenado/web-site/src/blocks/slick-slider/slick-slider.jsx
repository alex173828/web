import React, { Component } from 'react';
import classNames from 'classnames';

// slick slider
import Slider from "react-slick";

class SlickSlider extends React.Component {
  render() {

    var settings = {
      dots: true,
      infinite: false,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1050,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>

      </div>
    );
  }
}


export default( SlickSlider )

// import './team.scss';
