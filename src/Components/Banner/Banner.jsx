import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Banner = () => {
  return (
    <div className="relative w-[90%] max-md:w-full">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}>
        <div>
          <img src="/Banners/bannerOne.jpg" alt="bannerOne" />
        </div>
        <div>
          <img src="/Banners/bannerTwo.jpg" alt="bannerTwo" />
        </div>
        <div>
          <img src="/Banners/bannerThree.jpg" alt="bannerThree" />
        </div>
        <div>
          <img src="/Banners/bannerFour.jpg" alt="bannerFour" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
