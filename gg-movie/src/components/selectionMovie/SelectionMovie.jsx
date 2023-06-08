import "./SelectionMovie.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import HomePages from "../../pages/home/HomePages";
export default function SelectionMovie() {
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
        <div className="selection-movie">
          <h2>Selection Movie</h2>
        </div>
        <div className="swipper-wrapper">
            <Swiper
              dir="rtl"
              navigation={true}
              slidesPerView={4}
              spaceBetween={50}
              modules={[Navigation]}
              className="mySwiper"
              onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
              loop
              initialSlide={activeSlide}
            >
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="./image/980wx448h_34.jpg"
                  alt="Description of the image"
                />
              </SwiperSlide>
              <SwiperSlide>
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
