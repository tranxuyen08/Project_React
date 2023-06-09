import Card from "react-bootstrap/Card";
import { Link, useSearchParams } from "react-router-dom";
import "./CardListProducts.css";
import { useEffect, useState } from "react";

function CardsList({ item }) {
  return (
    <>
      <Card>
        <Link className="card-img">
          <Card.Img variant="top" src={item.image} />
        </Link>
        <Card.Body>
          <div className="card-content">
            <Card.Title>{item.nameMovie}</Card.Title>
            <div class="cgv-movie-info">
              <span class="cgv-info-bold">Thể loại: </span>
              <span class="cgv-info-normal">{item.type}</span>
            </div>
            <div class="cgv-movie-info">
              <span class="cgv-info-bold">Thời lượng: </span>
              <span class="cgv-info-normal">{item.time} phút</span>
            </div>
            <div class="cgv-movie-info">
              <span class="cgv-info-bold">Khởi chiếu: </span>
              <span class="cgv-info-normal">{item.day + "/" + item.month + "/" + item.year}</span>
            </div>
            <div className="action">
              <button className="btn-style btn-like">
                <i
                  class="fa-solid fa-thumbs-up"
                ></i>
                <p>Like</p>
              </button>
              <Link to={"/detail-product"} className=" btn-style btn-buy">
                <i
                  class="fa-solid fa-cart-shopping"
                  style={{ color: "#ffffff" }}
                ></i>
                <p>Mua</p>
              </Link>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardsList;
