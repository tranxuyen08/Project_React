import React, { useState } from "react";
import "./CheckOut.css";
import { ModelComfirm } from "../modelComfirm/ModelComfirm";
import { useDispatch, useSelector } from "react-redux";
import { callListOrdersAPI } from "../../redux/reducer/ListOrdersSlice";
import { useNavigate } from "react-router-dom";
import ListOrdersAPI from "../../api/ListOrder";
import { ToastContainer, toast } from "react-toastify";
const CheckOut = () => {
  const order = JSON.parse(localStorage.getItem("order")) ?? {};
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const listOrders = useSelector((state) => state.listOrders);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleConfirm = async () => {
    // Xử lý khi người dùng đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm

    // Tiếp tục xử lý thanh toán
    ListOrdersAPI.postListOrders(order).then();
    await toast.success("Thanh Toán Thành Công", {
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
      navigate("/");
    }, 2000);
    await localStorage.removeItem("order");
  };

  const handleCancel = () => {
    // Xử lý khi người dùng không đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm
    // Hủy bỏ thanh toán hoặc thực hiện các hành động khác
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
      <section className="section sect-checkout">
        <div className="container">
          <div className="content-checkout">
            <div className="title-booking">
              <h3>Thanh Toán</h3>
            </div>
            <div className="content-payment">
              <div className="payments">
                <ul>
                  <li>
                    <div className="checkout-products">
                      <div className="checkout-img">
                        <img src={order.image} />
                      </div>
                      <div className="detail-checkout">
                        <h4>{order.nameCinema}</h4>
                        <h5>{order.nameMovie}</h5>
                        <div className="checkout-seats">
                          <p className="label">Số Ghế :</p>
                          {order.seats &&
                            order?.seats.map((item) => {
                              return <p className="text">{item}</p>;
                            })}
                        </div>
                        <div className="time-play">
                          <p className="label">Suất Chiếu :</p>
                          <p className="text">{order.time}</p>
                          <div>
                            <div className="day">
                              <p className="">{order.day}</p>
                            </div>
                            <div>
                              <p className="text">{order.dayOfWeek}</p>
                              <p className="text">{order.month}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h4>Tổng Tiền Thanh Toán</h4>
                    <div className="content-payment">
                      <div className="total-payment">
                        <p>Tổng Tiền :</p>
                        <span className="price">
                          {Number(order.price).toLocaleString("de-DE")}VND
                        </span>
                      </div>
                      <button
                        onClick={() => setShowConfirmModal(true)}
                        className="btn-payment"
                      >
                        Thanh Toán
                      </button>
                      {showConfirmModal && (
                        <ModelComfirm
                          onConfirm={handleConfirm}
                          onCancel={handleCancel}
                        />
                      )}
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
