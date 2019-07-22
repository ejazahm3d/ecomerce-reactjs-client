import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import ImageCarousel from "./ImageCarousel";
// import { Container } from "@material-ui/core";

const images = [
  {
    id: 1,
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    alt: "Carousel"
  },
  {
    id: 2,
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    alt: "Carousel"
  },
  {
    id: 3,
    src: "https://mdbootstrap.com/img/Photos/Slides/img%20(68).jpg",
    alt: "Carousel"
  }
];

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        showThumbs={false}
        showArrows={false}
        autoPlay={true}
        swipeable={true}
        stopOnHover={true}
        showStatus={false}
      >
        {images.map(image => (
          <ImageCarousel key={image.id} image={image.src} alt={image.alt} />
        ))}
      </Carousel>
    );
  }
}
