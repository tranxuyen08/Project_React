import React from "react";
import CardsList from "../../components/card/CardList";
import { useSelector } from "react-redux";
import Url from "../../components/url/Url";
import { Link, useNavigate } from "react-router-dom";

const CommingSoon = () => {
  const productsList = useSelector((state) => state.products);
  const renderMovieType = productsList.filter(
    (value) => value.type == "comming soon"
  );

  const navigate = useNavigate();
  return (
    <>
      <Url />
      <section className="section sect-products">
        <div className="container">
          <div className="content-list">
            {renderMovieType.map((item) => {
              return (
                <Link onClick={() => navigate(`/detail-product/${item.id}`)}>
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

export default CommingSoon;
