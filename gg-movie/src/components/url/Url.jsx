import React, { useEffect, useState } from "react";
import "./Url.css";
import { Link, useLocation } from "react-router-dom";
const Url = () => {
  const router = useLocation();
  const [url, setURL] = useState("");
  useEffect(() => {
    if (router.pathname == "/phim-dang-chieu") {
      setURL("Phim Đang Chiếu");
    } else {
      setURL("Phim Sắp Chiếu");
    }
  }, [router.pathname]);

  return (
    <div className="list-url">
      <div className="container">
        <div class="breadcrumbs" itemprop="breadcrumb">
          <ul>
            <li class="home">
              <Link to={"/"}>Trang chủ</Link>
              <span>/ </span>
            </li>
            <li class="category7">
              <strong>{url}</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Url;
