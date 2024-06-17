import React from "react";
import style from "./category-grid.module.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

function CategoryGrid() {
  return (
    <div className={"container"}>
      <div className={style.header}>
        <h2>THE WORLD OF ELECTRICAL SOLUTIONS FOR MODERN HOMES</h2>
        <p>
          Step into the future of home living with "The World of Electrical
          Solutions for Modern Homes." This comprehensive guide is your gateway
          to transforming any living space into a smart, efficient, and secure
          haven. Whether you're an enthusiastic DIY homeowner, a professional
          electrician, or an interior designer, this book offers cutting-edge
          insights into the latest electrical innovations tailored for today's
          modern residences.
        </p>
      </div>
      <h2 className={"text-center"}>Categories</h2>
      <div data-aos="fade-right" className={style.arrows}>
        <div className="custom-swiper-button-prev">
          <button>
            <FaArrowLeft />
          </button>
        </div>
        <div className="custom-swiper-button-next">
          <button>
            <FaArrowRight />
          </button>
        </div>
      </div>
      <Swiper
        data-aos="fade-right"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={6}
        spaceBetween={30}
        loop={true}
        breakpoints={{
          1800: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          150: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        }}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        grabCursor={true}
        // points hide

        modules={[Navigation, Autoplay]}
        className={style.product_category}
      >
        {Category.map((item, index) => {
          return (
            <SwiperSlide className={style.category} key={index}>
              <img src={item.image} alt={item.name} />
              <div className={style.title}>
                <a href={item.link}>{item.name}</a>
              </div>
              <div className={style.view_more}>
                <div className={style.icon}>
                  <FiSearch />
                </div>

                <a href={item.link}>View More</a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default CategoryGrid;

const Category = [
  {
    name: "Wires & Cables",
    link: "/",
    image: "https://iili.io/d9SqcZJ.png",
  },
  {
    name: "Switches",
    link: "/",
    image: "https://iili.io/d9SCPBj.md.jpg",
  },
  {
    name: "Fans",
    link: "/",
    image: "https://iili.io/d9SooAP.md.jpg",
  },
  {
    name: "lighting & Luminaries",
    link: "/",
    image: "https://iili.io/d9SoNJ2.webp",
  },
  {
    name: "Appliances",
    link: "/",
    image: "https://iili.io/d9Sos5B.md.jpg",
  },
  {
    name: "Switch Gears",
    link: "/",
    image: "https://iili.io/d9Sxum7.md.webp",
  },
  {
    name: "Solar",
    link: "/",
    image: "https://iili.io/d9Sx1dQ.md.jpg",
  },
  {
    name: "Home Automation",
    link: "/",
    image: "https://iili.io/d9SxrhX.md.png",
  },
  {
    name: "CCTV",
    link: "/",
    image: "https://iili.io/d9SzfyB.md.jpg",
  },
  {
    name: "Pvc Conduits & Pipes",
    link: "/",
    image: "https://picsum.photos/200/300",
  },
];
