import React from "react";
import CardsList from "../../components/card/CardList";
import { useSelector } from "react-redux";
import Url from "../../components/url/Url";
import { Link, useNavigate } from "react-router-dom";
import './MoviePlaying.css'

const MoviePlaying = () => {
  const productsList = useSelector((state) => state.products);
  const renderMovieType = productsList.filter(
    (value) => value.status == "Playing Soon"
  );
  console.log(renderMovieType);
  const navigate = useNavigate();

  return (
    <>
      <Url />
      <section className="section sect-products">
        <div className="container">
          <div className="content-list">
            {renderMovieType.map((item) => {
              return (
                <Link className="link-movie" onClick={() => navigate(`/detail-product/${item.id}`)}>
                  <CardsList item={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MoviePlaying;
