import React, { useRef, useState } from "react";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
import { AiFillDelete, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ProductsAPI from "../../../api/ProductAPI";
import { callProductsAPI } from "../../../redux/reducer/ProductsSlice";
import ModelComfirmDelete from "../../modelComfirm/ModelComfirmDelete";


const ProductManager = () => {
  const productsList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const idDelete = useRef()
  const handleConfirm = async () => {
    // Xử lý khi người dùng đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm

    // Tiếp tục xử lý thanh toán
    ProductsAPI.deleteProduct(idDelete.current).then(()=>{
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
      dispatch(callProductsAPI()).unwrap()
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
            <span className="title-page">Products Manager</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>NO</th>
                <th>Image Products</th>
                <th>Name Movie</th>
                <th>The Loai</th>
                <th>Show Time</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="content-img">
                        <img src={item.image} />
                      </div>
                    </td>
                    <td>{item.nameMovie}</td>
                    <td>{item.theLoai}</td>
                    <td>{item.khoiChieu}</td>
                    <td>
                      <AiFillDelete
                        onClick={() => handleDelete(item.id)}
                        className="btn-delete"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button className="btn-add">
            <AiOutlineVideoCameraAdd />
            Add Movie
          </button>
          {showConfirmModal && (
            <ModelComfirmDelete
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductManager;
