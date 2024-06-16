import React from "react";
// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";
import style from "./hero-slider.module.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import {Pagination} from "swiper/modules";
import ImageAsset from "@/components/loader/ImageAsset";
import Image from "next/image";

function HeroSlider() {
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
          autoplay: {
            delay: 1000,
            disableOnInteraction: false,
          },
        }}
        modules={[Pagination]}
        className={style.slider}
      >
        <SwiperSlide>
          <Image
            src={"https://picsum.photos/1920/1080"}
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeroSlider;
