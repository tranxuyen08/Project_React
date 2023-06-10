import React, { useState } from "react";
import "./DetailProduct.css";
import Popup from "../popUp/PopUp";
import { useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Url from "../url/Url";

const DetailProduct = () => {
  const params = useParams();
  const [order, setOrder] = useState(JSON.parse(localStorage.getItem('order')) ?? {})
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const listMovie = useSelector(state => state.products)
  const navigate = useNavigate()

  const movieDetail =  listMovie?listMovie.find((item) => item.id == params.id)
  :{
    id : "",
      nameMovie : "",
      type : "",
      time : "",
      image: "",
      theLoai : "",
      khoiChieu: ""
  }

  const handleBuyTicket =  () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      navigate("/login");
    }
    setShowPopup(true);
    setOrder({
      ...order,
      idUser: user?.id,
      idProducts: params?.id
    })
  };
  localStorage.setItem('order', JSON.stringify(order))

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
    handleClosePopup();
  };

  return (
    <>
    <Url/>
      <section className="section sect-detail">
        <div className="container">
          <div className="content-detail">
            <div className="title-product">
              <h3 className="title-h3-product">Nội Dung Phim</h3>
            </div>
            <div className="product-essential">
              <div className="img-flim">
                <div>
                  <img
                    src={movieDetail?.image}
                    alt="movie poster"
                  />
                </div>
                <div className="detail-action">
                  <button className="btn-style btn-like">
                    <i
                      className="fa-solid fa-thumbs-up"
                      style={{ color: "#1877f2" }}
                    ></i>
                    <p>Like</p>
                  </button>
                  <button
                    className="btn-style btn-buy"
                    onClick={handleBuyTicket}
                  >
                    <i
                      className="fa-solid fa-cart-shopping"
                      style={{ color: "#ffffff" }}
                    ></i>
                    <p>Mua vé</p>
                  </button>
                </div>
              </div>
              <div className="detail-film">
                <div className="product-name">
                  <h3 className="title-h3">{movieDetail?.nameMovie}</h3>
                </div>
                <div className="detail-bottom">
                  <div className="detail-bottom">
                    <div className="infor-product">
                      <span className="label">Đạo diễn: </span>
                      <p className="text">
                        Joaquim Dos Santos, Justin K. Thompson, Kemp Powers
                      </p>
                    </div>
                    <div className="infor-product">
                      <span className="label">Diễn viên: </span>
                      <p className="text"> Shameik Moore</p>
                    </div>
                    <div className="infor-product">
                      <span className="label">Thể loại: </span>
                      <p className="text">
                        {movieDetail?.type}
                      </p>
                    </div>
                    <div className="infor-product">
                      <span className="label"> Khởi chiếu: </span>
                      <p className="text">{movieDetail?.day + "/" + movieDetail?.month + "/" +movieDetail?.year}</p>
                    </div>
                    <div className="infor-product">
                      <span className="label"> Thời lượng:</span>
                      <p className="text">{movieDetail?.time} phút</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="trailer">
            <iframe
              width="560"
              height="315"
              src={movieDetail?.trailler}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
      {showPopup && (
        <Popup
          handleDateSelect={handleDateSelect}
          handleClosePopup={handleClosePopup}
        />
      )}
      {selectedDate && <p>Ngày đã chọn: {selectedDate}</p>}
    </>
  );
};

export default DetailProduct;
