import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/reducer/UserSlice";
import { ToastContainer, toast } from "react-toastify";
import './Login.css'
import { updateHeader } from "../../redux/reducer/UpdateSlice";
const Login = () => {
  const user = JSON.parse(localStorage.getItem('user')) ??{}
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessTokenLogin");
    localStorage.removeItem("order");
  }, []);
  const [inputValue, setInputValue] = useState({});
  const [isError,setIsError] = useState('')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const changeInputValue = (e) => {
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
      try {
        await dispatch(login(inputValue)).unwrap();
        toast.success("Đăng Nhập Thành Công!", {
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
          dispatch(updateHeader())
          navigate("/");
        }, 2000);
        setIsError("")
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
        setIsError("Vui Long Nhap Du Thong Tin")
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
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      <section className="section sect-login">
        <div className="container">
          <div className="content-form">
            <div className="header-form">Đăng Nhập</div>
            <form className="form-login" onSubmit={handleLogin}>
              <div className="">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Nhập Email"
                  onChange={changeInputValue}
                />
                <label>Mật Khẩu</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Nhập Mật Khẩu"
                  onChange={changeInputValue}
                />
                {inputValue &&<p className="error-message">{isError}</p>}
                <input
                  type="submit"
                  id="cgv-btnsignup"
                  defaultValue="Đăng nhap"
                  className="btn-submit"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
