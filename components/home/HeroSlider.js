import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./hero-slider.module.scss";
import imagePlaceholder from "../../assets/18494353_6003842.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

function HeroSlider() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + " " + style.bullet + '"></span>'
            );
          },
        }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        navigation={false}
        className={style.slider}
      >
        <SwiperSlide>
          <Image
            src={imagePlaceholder}
            alt="image"
            width={1920}
            height={1080}
            // priority={true}
            fetchpriority="high"
            draggable={true}
            unoptimized={true}
            quality={100}
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagePlaceholder}
            alt="image"
            width={1920}
            height={1080}
            // priority={true}
            fetchpriority="high"
            draggable={true}
            unoptimized={true}
            quality={100}
            // layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={imagePlaceholder}
            alt="image"
            width={1920}
            height={1080}
            // priority={true}
            fetchpriority="high"
            draggable={true}
            unoptimized={true}
            quality={100}
            // layout="fill"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
