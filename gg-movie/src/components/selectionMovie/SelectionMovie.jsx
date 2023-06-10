import "./SelectionMovie.css";
import React, { useLayoutEffect, useRef, useState } from "react";
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
  const [slidesPerView, setSlidePrtView] = useState(3)
  const goToPrevSlide = () => {
    setActiveSlide((prevSlide) => prevSlide - 1);
  };

  const goToNextSlide = () => {
    setActiveSlide((prevSlide) => prevSlide + 1);
  };

  useLayoutEffect(()=>{
    function handleResize() {
      // Lấy kích thước mới của màn hình
      const screenWidth = window.innerWidth;

      // Tùy chỉnh giá trị slidePerView dựa trên kích thước màn hình
      let newSlidePerView;
      if (screenWidth >= 1200) {
        newSlidePerView = 4;
      } else if (screenWidth >= 992) {
        newSlidePerView = 3;
      } else if (screenWidth >= 768) {
        newSlidePerView = 2;
      } else {
        newSlidePerView = 1;
      }

      // Cập nhật giá trị slidePerView
      setSlidePrtView(newSlidePerView);
    }

    // Gắn trình xử lý sự kiện resize vào sự kiện resize của cửa sổ
    window.addEventListener('resize', handleResize);

    // Hủy bỏ trình xử lý sự kiện khi component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])
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
              slidesPerView={slidesPerView}
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
