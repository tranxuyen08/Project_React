import React, { useState } from "react";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
import { AiFillDelete, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import ProductsAPI from "../../../api/ProductAPI";
import { callProductsAPI } from "../../../redux/reducer/ProductsSlice";
import ModelComfirmDelete from "../../modelComfirm/ModelComfirmDelete";
import ModelAdmin from "../model/ModelAdmin";

const ProductManager = () => {
  const productsList = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [deleteProductId, setDeleteProductId] = useState(null);
  const [editProduct, setEditProduct] = useState({});
  //mo modal
  const handleCreate = () => {
    setShowCreateModal(true);
  };
  //dong modal
  const handleCreateModalClose = () => {
    setShowCreateModal(false);
  };

  const handleConfirm = async () => {
    // Xử lý khi người dùng đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm

    if (deleteProductId) {
      ProductsAPI.deleteProduct(deleteProductId).then(() => {
        toast.success("Xóa thành công", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        dispatch(callProductsAPI()).unwrap();
      });
    }
  };

  const handleCancel = () => {
    // Xử lý khi người dùng không đồng ý
    setShowConfirmModal(false); // Ẩn modal confirm
    // Hủy bỏ thanh toán hoặc thực hiện các hành động khác
  };

  const handleDelete = (id) => {
    setDeleteProductId(id);
    setShowConfirmModal(true);
  };

  const handleEdit = (item) => {
    setShowCreateModal(true);
    setEditProduct(item);
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
            <span className="title-page">Quan Ly San Pham</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Ảnh</th>
                <th>Tên Phim</th>
                <th>Thể Loại</th>
                <th>Ngày Chiếu</th>
                <th colSpan={2}>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {productsList.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="content-img">
                        <img src={item.image} alt="product" />
                      </div>
                    </td>
                    <td>{item.nameMovie}</td>
                    <td>{item.type}</td>
                    <td>{item.day + "/" + item.month + "/" +item.year}</td>
                    <td>
                      <AiFillDelete
                        onClick={() => handleDelete(item.id)}
                        className="btn-delete"
                      />
                      <FaEdit
                        onClick={() => handleEdit(item)}
                        className="btn-delete"
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <button onClick={handleCreate} className="btn-add">
            <AiOutlineVideoCameraAdd />
            Thêm Phim
          </button>
          {showConfirmModal && (
            <ModelComfirmDelete
              onConfirm={handleConfirm}
              onCancel={handleCancel}
            />
          )}
          {showCreateModal && (
            <ModelAdmin
              editProduct={editProduct}
              setShowCreateModal={setShowCreateModal}
              handleCreateModalClose={handleCreateModalClose}
              onClose={handleCreateModalClose}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductManager;
