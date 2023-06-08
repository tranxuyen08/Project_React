import React from "react";
import {AiFillDelete} from 'react-icons/ai'
import "./Users.css";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
const Users = () => {
  return (
    <div className="content-user">
      <SlideBarAdmin/>
      <div className="table-content">
        <div className="wrapper-title"><span className="sperator"></span><span className="title-page">My Admin</span></div>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>ID User</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NO</td>
              <td>ID User</td>
              <td>Name</td>
              <td>Email</td>
              <td>
                <AiFillDelete className="btn-delete"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
