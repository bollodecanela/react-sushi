import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { item_1, item_2, item_3 } from "../assets/img/carousel";

function Carousel() {
  return (
    <OwlCarousel
      loop={true}
      autoplay={true}
      autoplayTimeout={5000}
      items={1}
      nav
    >
      <div className="item">
        <img src={item_1} alt="" />
      </div>
      <div className="item">
        <img src={item_2} alt="" />
      </div>
      <div className="item">
        <img src={item_3} alt="" />
      </div>
    </OwlCarousel>
  );
}

export default Carousel;
