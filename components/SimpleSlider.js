"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const SimpleSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
            <div>
                <img src={"/hero1.jpg"} style={{ width: '100%' }} />
            </div>
            <div>
                <img src={"/hero2.jpg"} style={{ width: '100%' }} />
            </div>
        </Slider>
    );
}

export default SimpleSlider;