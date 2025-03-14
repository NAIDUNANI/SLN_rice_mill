import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import mill4 from "../pics/mill4.jpeg";
import mill1 from "../pics/mill1.jpeg";
import mill5 from "../pics/mill5.jpeg";
import mill2 from "../pics/mill2.jpeg";
import mill3 from "../pics/mill3.jpeg";
import mill6 from "../pics/mill6.jpeg";


const Slider = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      effect="fade" // Smooth fade effect
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      navigation={true}
      loop={true}
    >
      <SwiperSlide>
        <img src={mill6} alt="Slide 1" className="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mill3} alt="Slide 2" className="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mill4} alt="Slide 3" className="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mill2} alt="Slide 4" className="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mill5} alt="Slide 5" className="slider-image" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={mill1} alt="Slide 5" className="slider-image" />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
