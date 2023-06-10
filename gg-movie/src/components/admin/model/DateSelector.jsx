import React, { useState } from "react";

const DateSelector = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const days = Array.from(Array(31).keys()).map((day) => day + 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const years = Array.from(Array(10).keys()).map((year) => 2023 - year);

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (

  );
};

export default DateSelector;
