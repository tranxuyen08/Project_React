import React, { useEffect, useState } from "react";
import "./Booking.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Booking = () => {
  const navigate = useNavigate()
  const [selectedSeats, setSelectedSeats] = useState([]);
  const products = useSelector((state) => state.products);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const order = JSON.parse(localStorage.getItem("order")) ?? {};
  const [booking, setBooking] = useState(
    JSON.parse(localStorage.getItem("order")) ?? {}
  );
  const productBooking = products.find((item) => item.id == order.idProducts);
  const renderSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    const seatsPerRow = 10;
    const seats = [];

    const handleChooseSeats = (seatLabel) => {
      const index = selectedSeats.indexOf(seatLabel);
      if (index === -1) {
        // Phần tử chưa được chọn
        setSelectedSeats([...selectedSeats, seatLabel]);
      } else {
        // Phần tử đã được chọn
        const updatedSeats = [...selectedSeats];
        updatedSeats.splice(index, 1);
        setSelectedSeats(updatedSeats);
      }
    };
    for (let row of rows) {
      const rowSeats = [];

      for (let seatNum = 1; seatNum <= seatsPerRow; seatNum++) {
        const seatLabel = `${row}${seatNum}`;
        const isSelected = selectedSeats.includes(seatLabel); // Kiểm tra xem phần tử đã được chọn chưa
        rowSeats.push(
          <div
            onClick={() => handleChooseSeats(seatLabel)}
            key={seatLabel}
            className={`seat ${isSelected ? "checked" : ""}`}
          >
            {seatLabel}
          </div>
        );
      }

      seats.push(
        <li key={row} className="seat-row">
          {rowSeats}
        </li>
      );
    }
    return seats;
  };
  useEffect(() => {
    const dataLocal = {
      ...booking,
      seats: selectedSeats,
      price: 55000 * selectedSeats.length,
    };
    setBooking({
      ...booking,
      seats: selectedSeats,
      nameMovie : productBooking?.nameMovie,
      image : productBooking.image
    });
    localStorage.setItem("order", JSON.stringify(dataLocal));
    setIsBookingComplete(selectedSeats.length > 0);
  }, [selectedSeats]);

  const handleNext = () =>{
    navigate('/checkout')
  }
  return (
    <section className="section sect-booking">
      <div className="container">
        <div className="content-booking">
          <div className="title-booking">
            <h3>Booking Online</h3>
          </div>
          <div className="content-booking">
            <div className="booking-top">
              <h3 className="">Người / Ghế</h3>
            </div>
            <div className="screen">
              <span className="text-screen">Man Hinh Chieu</span>
            </div>
            <ul className="list-seats">{renderSeats()}</ul>
            <div className="ticketbox-notice">
              <div className="checked">Checked</div>
              <div className="choosed">Đã Chọn</div>
              <div className="classic">Thường</div>
              <div className="vip">VIP</div>
            </div>
          </div>
          {productBooking && (
            <div className="bottom-content">
              <div className="minicart-wrapper">
                <ul>
                  <li>
                    <div className="product-detail">
                      <div className="products-detail-img">
                        <img src={productBooking.image} alt="" />
                      </div>
                      <div>
                        <p>{productBooking.nameMovie}</p>
                        <div className="seats">
                          {booking?.seats &&
                            booking?.seats.map((item) => {
                              return <p key={item}>{item}</p>;
                            })}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="table-detail">
                      <table className="table-detail">
                        <tr>
                          <th className="size-large">Rạp</th>
                          <th>Suất Chiếu</th>
                          <th>Phòng Chiếu</th>
                          <th>Giá</th>
                          <th>Combo</th>
                          <th>Tổng</th>
                        </tr>
                        <tr>
                          <td className="size-large">{order?.nameCinema}</td>
                          <td>{order?.time}</td>
                          <td>C7</td>
                          <td>55.000VND</td>
                          <td>0,00</td>
                          <td>
                            {Number(order.price).toLocaleString("de-DE")}VND
                          </td>
                        </tr>
                      </table>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <button
          onClick={handleNext}
          className={`btn-booking ${isBookingComplete ? "" : "hidden"}`}
        >
          Next
          <i className="fa-solid fa-forward" style={{ color: "#ffffff" }}></i>
        </button>
      </div>
    </section>
  );
};

export default Booking;
