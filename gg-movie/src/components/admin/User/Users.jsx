import React from "react";
import { AiFillDelete } from "react-icons/ai";
import "./Users.css";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../../redux/reducer/UserSlice";
const Users = () => {
  const dispatch = useDispatch()
  const usersManger = useSelector((state) => state.user);

  return (
    <div className="content-user">
      <SlideBarAdmin />
      <div className="table-content">
        <div className="wrapper-title">
          <span className="sperator"></span>
          <span className="title-page">Quản Lý Người Dùng</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>STT</th>
              <th>ID Người Dùng</th>
              <th>Tên</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {usersManger && usersManger?.map((item, index) => {
              return (
                <tr key={item?.id}>
                  <td>{index + 1}</td>
                  <td>{item?.id}</td>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
