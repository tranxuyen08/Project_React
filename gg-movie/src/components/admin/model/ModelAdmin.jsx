import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./Model.css";
import { BiAward, BiSubdirectoryRight } from "react-icons/bi";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import {
  handleUpdateProduct,
  postProductsAPI,
} from "../../../redux/reducer/ProductsSlice";

const ModelAdmin = ({
  setShowCreateModal,
  handleCreateModalClose,
  editProduct,
}) => {
  // xu ly select day
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
    "December",
  ];
  const years = Array.from(Array(10).keys()).map((year) => 2023 - year);

  const resetForm = () => {
    setNewProduct({
      // Set giá trị mặc định cho các trường trong form
      nameMovie: "",
      status: "",
      type: [],
      day: "",
      month: "",
      year: "",
      image: "",
    });
    setSelectedDay("");
    setSelectedMonth("");
    setSelectedYear("");
  };

  const handleDayChange = (e) => {
    setSelectedDay(e.target.value);
    setNewProduct({
      ...newProduct,
      day: e.target.value,
    });
  };

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
    setNewProduct({
      ...newProduct,
      month: e.target.value,
    });
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
    setNewProduct({
      ...newProduct,
      year: e.target.value,
    });
  };

  // xu ly form model
  const [editData, setEditData] = useState("");
  const [newProduct, setNewProduct] = useState("");
  const [type, setType] = useState([]);
  const updateProduct = useSelector((state) => state.products);
  // const [isChecked, setIsCheck] = useState({ checked: false });
  const dispatch = useDispatch();
  //xu ly nut dong
  const handleClose = (e) => {
    e.preventDefault();
    resetForm();
    handleCreateModalClose();
    console.log(newProduct);
  };

  const handleChangeInput = (e) => {
    setNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  //function chọn thể loại phim
  const handleChooseType = (e) => {
    if (e.target.checked) {
      setType([...type, e.target.value]);
      setNewProduct({
        ...newProduct,
        type,
      });
    } else {
      const test = type.filter((t) => {
        return t !== e.target.value;
      });
      setType(test);
    }
  };

  //function upload image
  const handleUploadImage = (e) => {
    const fileImage = e.target.files[0];
    if (!fileImage) return;
    const storages = storage;
    const imgRefs = ref(storages, `image/${fileImage.name}`);
    uploadBytes(imgRefs, fileImage).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setNewProduct({
          ...newProduct,
          image: url,
        });
      });
    });
  };
  //function submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(postProductsAPI(newProduct)).unwrap();
    // data && setIsClose(false);
    handleCreateModalClose();
  };

  // viết function thay đổi status
  const handleStatusChange = (e) => {
    setNewProduct({
      ...newProduct,
      status: e.target.value,
    });
  };

  // set lại editProdcuts nếu có để truyền vao form
  useEffect(() => {
    if (editProduct) {
      setNewProduct(editProduct);
      setSelectedDay(editProduct.day);
      setSelectedMonth(editProduct.month);
      setSelectedYear(editProduct.year);
      setType(editProduct.type);
    }
  }, [editProduct]);
  // handle Update
  const handleUpdate = async (e) => {
    e.preventDefault();
    handleCreateModalClose()
    await dispatch(handleUpdateProduct(newProduct)).unwrap();
  };
  return (
    <>
      {setShowCreateModal && (
        <div className="model">
          <div className="model-wrapper">
            <form>
              <button onClick={handleClose} className="btn-close"></button>
              <div className="form-content">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Ảnh Phim</Form.Label>
                  <Form.Control
                    onChange={handleUploadImage}
                    name="file"
                    type="file"
                    src={newProduct.image || ""}
                  />
                </Form.Group>
                <Form.Label htmlFor="inputPassword5">Tên Phim</Form.Label>
                <Form.Control
                  onChange={handleChangeInput}
                  name="nameMovie"
                  type="text"
                  formNoValidate
                  value={newProduct.nameMovie || ""}
                />
                <label>Trạng Thái Phim</label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={handleStatusChange}
                  name="status"
                  value={newProduct.status || ""}
                >
                  <option value={""}>--Trạng Thái--</option>
                  <option value={"Playing Soon"}>Playing Soon</option>
                  <option value={"Comming Soon"}>Comming Soon</option>
                </Form.Select>
                <label>Thê Loại Phim</label>
                {["checkbox"].map((type) => (
                  <div
                    onChange={handleChooseType}
                    key={`inline-${type}`}
                    className="mb-3 the-loai"
                  >
                    <Form.Check
                      inline
                      label="Hành Động"
                      name="group1"
                      type={type}
                      value="Hành Động"
                      id={`inline-${type}-1`}
                      checked={
                        newProduct.type && newProduct.type.includes("Hành Động")
                      }
                      onChange={handleChooseType}
                    />
                    <Form.Check
                      inline
                      label="Kinh Dị"
                      name="group1"
                      type={type}
                      value={"Kinh Dị"}
                      id={`inline-${type}-2`}
                      checked={
                        newProduct.type && newProduct.type.includes("Kinh Dị")
                      }
                    />
                    <Form.Check
                      inline
                      label="Hài Hước"
                      name="group1"
                      type={type}
                      value="Hài Hước"
                      id={`inline-${type}-2`}
                      checked={
                        newProduct.type && newProduct.type.includes("Hài Hước")
                      }
                    />
                    <Form.Check
                      inline
                      label="Tình Cảm"
                      name="group1"
                      type={type}
                      value="Tình Cảm"
                      id={`inline-${type}-2`}
                      checked={
                        newProduct.type && newProduct.type.includes("Tình Cảm")
                      }
                    />
                    <Form.Check
                      inline
                      label="Khoa Học Viễn Tưởng"
                      name="group1"
                      type={type}
                      value="Khoa Học Viễn Tưởng"
                      id={`inline-${type}-2`}
                      checked={
                        newProduct.type &&
                        newProduct.type.includes("Khoa Học Viễn Tưởng")
                      }
                    />
                  </div>
                ))}
                <div className="date">
                  <select
                    value={selectedDay}
                    name="day"
                    onChange={handleDayChange}
                  >
                    <option value="">Ngày</option>
                    {days.map((day) => (
                      <option key={day} value={day}>
                        {day}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedMonth}
                    name="month"
                    onChange={handleMonthChange}
                  >
                    <option value="">Tháng</option>
                    {months.map((month, index) => (
                      <option key={index} value={index + 1}>
                        {month}
                      </option>
                    ))}
                  </select>
                  <select
                    value={selectedYear}
                    name="year"
                    onChange={handleYearChange}
                  >
                    <option value="">Năm</option>
                    {years.map((year) => (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {newProduct.id ? (
                <button onClick={handleUpdate} className="btn-submit">
                  <BiSubdirectoryRight />
                  Cập Nhập
                </button>
              ) : (
                <button onClick={handleSubmit} className="btn-submit">
                  <BiSubdirectoryRight />
                  Thêm
                </button>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModelAdmin;
