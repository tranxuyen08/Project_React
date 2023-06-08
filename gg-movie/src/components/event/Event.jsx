import "./Event.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
export default function Event() {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) => prevSlide - 1);
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => prevSlide + 1);
  };
  return (
    <section className=" section sect-movie">
      <div className="container">
        <div className="selection-event">
          <h2 className="title-event">Event</h2>
        </div>
        <div className="swipper-wrapper">
          <Swiper
            dir="rtl"
            navigation={true}
            slidesPerView={5}
            spaceBetween={10}
            modules={[Navigation]}
            className="mySwiper"
            onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
            loop
            initialSlide={activeSlide}
          >
            <SwiperSlide className="event-img">
              <img
                src="./image/2023_u22_n_o_240x201.png"
                alt="Description of the image"
              />
            </SwiperSlide>
            <SwiperSlide className="event-img">
              <img
                src="./image/2023_happy_wed-02.png"
                alt="Description of the image"
              />
            </SwiperSlide>
            <SwiperSlide className="event-img">
              <img
                src="./image/birthday_popcorn_box_240x201.png"
                alt="Description of the image"
              />
            </SwiperSlide>
            <SwiperSlide className="event-img">
              <img
                src="./image/2023_culture_day_n_o_240x201.png"
                alt="Description of the image"
              />
            </SwiperSlide>
            <SwiperSlide className="event-img">
              <img
                src="./image/980wx448h_34.jpg"
                alt="Description of the image"
              />
            </SwiperSlide>
            <SwiperSlide className="event-img">
              <img
                src="./image/980wx448h_34.jpg"
                alt="Description of the image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div></div>
      </div>
    </section>
  );
}
