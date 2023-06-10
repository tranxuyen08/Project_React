import React from "react";
import CardsList from "../../components/card/CardList";
import { useSelector } from "react-redux";
import Url from "../../components/url/Url";
import { Link, useNavigate } from "react-router-dom";
import './ListMovie.css';

const CommingSoon = () => {
  const productsList = useSelector((state) => state.products);
  const renderMovieType = productsList.filter((value) => value.status === "Comming Soon");

  const navigate = useNavigate();

  return (
    <>
      <Url />
      <section className="section sect-products">
        <div className="wrapper-movie">
          <div className="content-list">
            {renderMovieType.map((item) => (
              <Link key={item.id} onClick={() => navigate(`/detail-product/${item.id}`)}>
                <CardsList item={item} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CommingSoon;
