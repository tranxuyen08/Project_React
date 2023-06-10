import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Dropdown } from "react-bootstrap";
import {FiMenu} from 'react-icons/fi'

export default function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const updateHeaderTop = useSelector((state) => state.updateHeader);
  const router = useLocation();
  useEffect(() => {
    if (router.pathname === "/login") {
      setUser(undefined);
    }
  }, [router.pathname]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [updateHeaderTop]);
  return (
    <>
      <div className="top-header">
        <div className="container">
          {user ? (
            <div className="top-header-content">
              <Link className="user-text" to={"/login"}>
                <i
                  className="fa-regular fa-user"
                  style={{ color: "#000000" }}
                ></i>
                <p>Xin Chào!</p>
              </Link>
              <Link to={"/login"}>{user.name}</Link>
              <p>/</p>
              <Link to={"/login"}>Đăng Xuất</Link>
            </div>
          ) : (
            <div className="top-header-content">
              <Link to={"/login"}>
                <i
                  className="fa-regular fa-user"
                  style={{ color: "#000000" }}
                ></i>
              </Link>
              <Link to={"/login"}>Đăng Nhập</Link>
              <p>/</p>
              <Link to={"/register"}>Đăng Ký</Link>
            </div>
          )}
        </div>
      </div>
      <header className="header">
        <div className="wrapper-header">
          <div className="header-content">
            <div className="title-content">
              <Link to="/">
                <div className="cgv-logo">
                  <img
                    src="https://www.cgv.vn/skin/frontend/cgv/default/images/cgvlogo.png"
                    alt="CGV Logo"
                  />
                </div>
              </Link>
            </div>
            <ul className="link-list">
              <li className="item-link">
                <Link to="/">Phim</Link>
                <ul className="type-movie">
                  <li>
                    <Link to="/phim-dang-chieu">Phim Đang Chiếu</Link>
                  </li>
                  <li>
                    <Link to="/phim-sap-chieu">Phim Sắp Chiếu</Link>
                  </li>
                </ul>
              </li>
              <li className="item-link">
                <Link to="/rap-ggm">Rạp CGV</Link>
              </li>
              <li className="item-link">
                <Link to="/thanh-vien">Thành Viên</Link>
              </li>
              <li className="item-link">
                <Link to="/cultureplex">CULTUREPLEX</Link>
              </li>
              <li className="item-link">
                <div className="badge-recruitment">
                  <Link to="/tuyen-dung">Tuyển Dụng</Link>
                  <div className="recruitment">
                    <img
                      src="https://www.cgv.vn/skin//frontend/cgv/default/images/hot-jobs.png"
                      alt="Hot Jobs"
                    />
                  </div>
                </div>
              </li>
            </ul>
            <div className="buy-ticket-now">
              <Link to="/phim-dang-chieu">
                <img
                  src="https://www.cgv.vn/media/wysiwyg/news-offers/mua-ve_ngay.png"
                  alt="Mua Vé Ngay"
                />
              </Link>
            </div>
            <div className=" drop-down">
              <Dropdown className="d-inline mx-2">
                <Dropdown.Toggle id="dropdown-autoclose-true">
                  <FiMenu/>
                  Menu
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#"> <Link className="link-drop" to="/phim-dang-chieu">Phim Đang Chiếu</Link></Dropdown.Item>
                  <Dropdown.Item href="#"><Link  className="link-drop" to="/phim-sap-chieu">Phim Sắp Chiếu</Link></Dropdown.Item>
                  <Dropdown.Item href="#"> <Link className="link-drop" to="/rap-ggm">Rạp CGV</Link></Dropdown.Item>
                  <Dropdown.Item href="#"> <Link className="link-drop" to="/thanh-vien">Thành Viên</Link></Dropdown.Item>
                  <Dropdown.Item href="#"><Link className="link-drop" to="/cultureplex">CULTUREPLEX</Link></Dropdown.Item>
                  <Dropdown.Item href="#"><Link className="link-drop" to="/tuyen-dung">Tuyển Dụng</Link></Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
