import React, { useRef, useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import "../User/Users.css";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ModelComfirmDelete from "../../modelComfirm/ModelComfirmDelete";
import ListOrdersAPI from "../../../api/ListOrder";
import { callListOrdersAPI } from "../../../redux/reducer/ListOrdersSlice";
const HistoryProducts = () => {
  const dispatch = useDispatch();
  const historyOrders = useSelector((state) => state.listOrders);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const idDelete = useRef()
  const handleConfirm = async () => {
    // Xử lý khi người dùng đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm

    // Tiếp tục xử lý thanh toán
    ListOrdersAPI.deleteListOrder(idDelete.current).then(()=>{
      toast.success("Xoa Thành Công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      dispatch(callListOrdersAPI()).unwrap()
    });

  };
  const handleCancel = () => {
    // Xử lý khi người dùng không đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm
    // Hủy bỏ thanh toán hoặc thực hiện các hành động khác
  };
  const handleDelete = (id) => {
    idDelete.current = id
    setShowConfirmModal(true);
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
      <div className="content-user">
        <SlideBarAdmin />
        <div className="table-content">
          <div className="wrapper-title">
            <span className="sperator"></span>
            <span className="title-page">Lịch Sử Mua Hàng</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>ID Người Dùng</th>
                <th>Email</th>
                <th>Tên Phim</th>
                <th>Số Lượng</th>
                <th>Giá</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {historyOrders.map((item, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{item.idUser}</td>
                    <td>{item.email}</td>
                    <td>{item.nameMovie}</td>
                    <td>{item.seats.length}</td>
                    <td>{Number(item.price).toLocaleString("de-DE")}VND</td>
                    <td>
                      <AiFillDelete
                        onClick={() => handleDelete(item.id)}
                        className="btn-delete"
                      />
                      {showConfirmModal && (
                        <ModelComfirmDelete
                          onConfirm={handleConfirm}
                          onCancel={handleCancel}
                        />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HistoryProducts;
