import React from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Container } from "@material-ui/core";
import Slider from "react-slick";
import { homeCarouselImages } from "../data";

function SlickCarousel() {
    const settings = {
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    }

    return (
        
            <Slider {...settings}>
                {
                    homeCarouselImages.map(images => 
                        <img src={images} style={{width:'100%'}} alt=" " />    
                    )
                }
            </Slider>
        
    )
}

export default SlickCarousel
