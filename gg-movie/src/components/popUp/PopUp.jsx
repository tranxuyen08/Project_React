import React, { useState, useEffect } from "react";
import "./PopUp.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Popup = ({ handleClosePopup }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState(null);
  const [selectedShowTime, setSelectedShowTime] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const location = useSelector((state) => state.movieVenue);
  const [renderLocation, setRenderLocation] = useState([]);
  const [booking, setBooking] = useState(
    JSON.parse(localStorage.getItem("order"))
  );
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  const navigate = useNavigate();
  const handleSelectDate = (date) => {
    setSelectedDay(date.day);
    setSelectedMonth(date.month);
    setSelectedDayOfWeek(date.dayOfWeek);
  };

  const handleSelectBranch = (branch, event) => {
    setSelectedBranch(branch);
    setRenderLocation(location.filter((item) => item.location == branch));
  };

  const getDates = () => {
    const today = new Date();
    const dates = [];
    for (let i = 0; i < 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const day = date.getDate();
      const month = date.toLocaleString("default", { month: "short" });
      const dayOfWeek = date.toLocaleString("default", { weekday: "short" });
      dates.push({ day, month, dayOfWeek });
    }
    return dates;
  };
  const handleGetTime = (item, value) => {
    if (booking)
      setBooking({
        ...booking,
        name: item.location,
        time: value.time,
        day: selectedDay,
        month: selectedMonth,
        dayOfWeek: selectedDayOfWeek,
        nameCinema: item.name,
      });
    setSelectedShowTime(value.time);
    setIsBookingComplete(true);
  };
  const handleNext = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user == null) {
      navigate("/login");
    } else {
      setBooking({
        ...booking,
        userID: user.id,
      });
      localStorage.setItem("order", JSON.stringify(booking));
      navigate("/booking-tickets");
    }
  };
  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="fixed-btn">
          <button className="close-button" onClick={handleClosePopup}>
            X
          </button>
          <ul>
            {getDates().map((date, index) => (
              <li
                key={index}
                className={selectedDay === date.day ? "selectedDay" : ""}
                onClick={() => handleSelectDate(date)}
              >
                <div className="choose-day">
                  <div>
                    <p>{date.dayOfWeek}</p>
                    <p>{date.month}</p>
                  </div>
                  <div>
                    <p>{date.day}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <ul className="list-branch">
            <li
              onClick={() => handleSelectBranch("TP HCM")}
              className={selectedBranch === "TP HCM" ? "selected" : ""}
            >
              TP HCM
            </li>
            <li
              onClick={() => handleSelectBranch("Ha Noi")}
              className={selectedBranch === "Ha Noi" ? "selected" : ""}
            >
              Ha Noi
            </li>
            <li
              onClick={() => handleSelectBranch("Da Nang")}
              className={selectedBranch === "Da Nang" ? "selected" : ""}
            >
              Da Nang
            </li>
          </ul>

          {renderLocation.map((item, index) => {
            return (
              <div key={index + 1} className="show-time">
                <h3>{item.name}</h3>
                <ul className="list-show-time">
                  {item.showTime.map((value, index) => {
                    return (
                      <li
                        onClick={() => handleGetTime(item, value)}
                        key={index + 1}
                        className={`item-show-time ${
                          selectedShowTime === value.time ? "selected" : ""
                        }`}
                      >
                        {value.time}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
            <button
              onClick={handleNext}
              className={`btn-next ${isBookingComplete ? "" : "hidden"}`}
            >
              Next
              <i
                className="fa-solid fa-forward"
                style={{ color: "#ffffff" }}
              ></i>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
