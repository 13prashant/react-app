import { useState } from "react";
import { Carousel, Image } from "react-bootstrap";

const images = [
  "https://images.pexels.com/photos/2738221/pexels-photo-2738221.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1671324/pexels-photo-1671324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2080960/pexels-photo-2080960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];

const HomeCarousel = () => {
  return (
    <Carousel pause="hover" className="bg-dark">
      {images.map((image) => (
        <Carousel.Item>
          <Image src={image} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
