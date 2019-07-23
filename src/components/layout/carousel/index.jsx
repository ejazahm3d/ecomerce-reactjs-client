import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "./ImageCarousel";
// import { Container } from "@material-ui/core";

const images = [
  {
    id: 1,
    src:
      "https://www.mobilephonesdirect.co.uk/assets/img/resources/xiaomi-mi-8-pro-banner.jpg",
    alt: "Carousel"
  },
  {
    id: 2,
    src: "https://www.cubot.net/images/max2-banner.jpg",
    alt: "Carousel"
  },
  {
    id: 3,
    src: "https://xiaomi-mi.us/uploads/Slide/Mi_8_Lite_1540816720.jpg",
    alt: "Carousel"
  }
];

export default class HomePageCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showArrows={false}
        autoPlay={true}
        swipeable={true}
        stopOnHover={true}
        showStatus={false}
        infiniteLoop={true}
      >
        {images.map(image => (
          <ImageCarousel key={image.id} image={image.src} alt={image.alt} />
        ))}
      </Carousel>
    );
  }
}
