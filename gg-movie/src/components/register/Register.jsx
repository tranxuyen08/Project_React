import React, { useEffect, useState } from "react";
import "./Register.css";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/reducer/UserSlice";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const Register = () => {
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessTokenLogin");
  }, []);
  const [valueInput, setValueInput] = useState({});
  const [inputError, setInputError] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const optionsDay = [];
  const optionMonth = [];
  for (let i = 1; i <= 30; i++) {
    optionsDay.push(
      <option value={i} key={i}>
        {i}
      </option>
    );
  }
  for (let j = 1; j <= 12; j++) {
    optionMonth.push(
      <option value={j} key={j}>
        {j}
      </option>
    );
  }
  const currentYear = new Date().getFullYear();
  const startYear = 1975;
  const years = [];

  for (let year = startYear; year <= currentYear; year++) {
    years.push(
      <option value={year} key={year}>
        {year}
      </option>
    );
  }
  const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };
  //  xu ly validate
  const validateRegister = () => {
    const errors = {};

    // Kiểm tra từng trường thông tin
    if (!valueInput.name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!valueInput["phone-number"]) {
      errors["phone-number"] = "Vui lòng nhập số điện thoại";
    }
    if (!valueInput.email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!valueInput.password) {
      errors.password = "Vui lòng nhập mật khẩu";
    }
    if (!valueInput.day || !valueInput.month || !valueInput.year) {
      errors.birthday = "Vui lòng chọn ngày sinh";
    }
    if (!gender) {
      errors.gender = "Vui lòng chọn giới tính";
    }
    if (!valueInput.country) {
      errors.country = "Vui lòng chọn khu vực";
    }

    setInputError(errors); // Cập nhật state lỗi

    // Kiểm tra nếu không có lỗi thì trả về true, ngược lại false
    return Object.keys(errors).length === 0;
  };

  // xu ly logic register

  const handleValueInput = (e) => {
    setValueInput({
      ...valueInput,
      [e.target.name]: e.target.value,
      role: 2
    });
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    const isValid = validateRegister(); // Kiểm tra thông tin đăng ký
    if (isValid) {
      try {
        await dispatch(register(valueInput)).unwrap();
        toast.success("Register thanh cong", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } catch (error) {
        toast.error(error.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    }
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <section className="section sect-login">
        <div className="container">
          <div className="content-form">
            <div className="header-form">Đăng Ký</div>
            <form className="form-login" onSubmit={handleRegister}>
              <div className="">
                <label>Tên</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Nhập Tên"
                  onChange={handleValueInput}
                  className={inputError.name ? "input-error" : ""}
                />
                <label>Số Điện Thoại</label>
                <input
                  type="number"
                  name="phone-number"
                  placeholder="Nhập Số Điện Thoại"
                  onChange={handleValueInput}
                  className={inputError.name ? "input-error" : ""}
                />
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập Email"
                  onChange={handleValueInput}
                  className={inputError.name ? "input-error" : ""}
                />
                <label>Mật Khẩu</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Nhập Mật Khẩu"
                  onChange={handleValueInput}
                  className={inputError.name ? "input-error" : ""}
                />
                <label>Ngày Sinh</label>
                <div className="select">
                  <select
                    name="day"
                    className={`day-of-birth ${inputError.day ? "error" : ""}`}
                    onChange={handleValueInput}
                  >
                    <option value={""}>Ngày</option>
                    {optionsDay}
                  </select>

                  <select
                    name="month"
                    className={`month-of-birth ${
                      inputError.day ? "error" : ""
                    }`}
                    onChange={handleValueInput}
                  >
                    <option value={""}>Tháng</option>
                    {optionMonth}
                  </select>

                  <select
                    name="year"
                    className={`year-of-birth ${inputError.day ? "error" : ""}`}
                    onChange={handleValueInput}
                  >
                    <option value={""}>Năm</option>
                    {years}
                  </select>
                  <div className="group-gender">
                    <label className={`${inputError.gender ? "error" : ""}`}>
                      Nam
                    </label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      checked={gender === "male"}
                      onChange={handleGenderChange}
                    />
                  </div>
                  <br />
                  <div className="group-gender">
                    <label>Nữ</label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      checked={gender === "female"}
                      onChange={handleGenderChange}
                    />
                  </div>
                </div>
                <label>Khu Vực</label>
                <select name="country" onChange={handleValueInput}>
                  <option value="">-- Khu Vực --</option>
                  <option value={"TP-HCM"}>TP HCM</option>
                  <option value={"HaNoi"}>Ha Noi</option>
                  <option value={"DaNang"}>Da Nang</option>
                </select>
              </div>
              <div className="terms-register">
                <label className="r-terms">
                  <input
                    type="checkbox"
                    defaultChecked="checked"
                    name="cgv-terms"
                    id="cgv-terms"
                    defaultValue="ok"
                    onchange="validateForm(this.id,'terms')"
                  />{" "}
                  Tôi đồng ý với{" "}
                  <a
                    className="link-terms-use"
                    href="https://www.cgv.vn/default/terms-use/"
                  >
                    Điều Khoản Sử Dụng của CGV
                  </a>{" "}
                </label>
                {inputError.name && (
                  <span className="error-message">{inputError.name}</span>
                )}
                <input
                  type="submit"
                  id="cgv-btnsignup"
                  defaultValue="Đăng ký"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
