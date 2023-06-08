import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-brand-slide">
          <div className="sect-smuse">
            <ul>
              <li>4DX</li>
              <li>4DX</li>
              <li>4DX</li>
              <li>4DX</li>
              <li>4DX</li>
            </ul>
          </div>
        </div>
        <div className="footer-cgv-policy">
          <div className="content-cgv-policy">
            <ul className="list-footer">
              <li className="item-footer">
                <h3 className="title-h3">CGV Việt Nam</h3>
                <ul>
                  <li>Giới Thiệu</li>
                  <li>Tiện Ích Online</li>
                  <li>Thẻ Quà Tặng</li>
                  <li>Tuyển Dụng</li>
                  <li>Liên Hệ Quảng Cáo CGV</li>
                </ul>
              </li>
              <li className="item-footer">
                <h3 className="title-h3">Điều khoản sử dụng</h3>
                <ul>
                  <li>Điều Khoản Chung</li>
                  <li>Điều Khoản Giao Dịch</li>
                  <li>Chính Sách Thanh Toán</li>
                  <li>Chính Sách Bảo Mật</li>
                  <li>Câu Hỏi Thường Gặp</li>
                </ul>
              </li>
              <li className="item-footer">
                <h3 className="title-h3">Kết nối với chúng tôi</h3>
                <ul>
                  <li><i className="fab fa-facebook-square" style={{color: "#298cf1"}}></i></li>
                  <li><i className="fab fa-youtube" style={{color: "#ed3833"}}></i></li>
                  <li><i className="fab fa-instagram-square" style={{color: "#d6249f"}}></i></li>
                  <li><i className="fab fa-google"></i></li>
                </ul>
                <h2 className="cgv-permission">CGV</h2>
              </li>
              <li className="item-footer">
                <h3 className="title-h3">Chăm sóc khách hàng</h3>
                <ul>
                  <li>Hotline: 1900 6017</li>
                  <li>Giờ làm việc: 8:00 - 22:00 (Tất cả các ngày bao gồm cả Lễ Tết)</li>
                  <li>Email hỗ trợ: hoidap@cgv.vn</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
