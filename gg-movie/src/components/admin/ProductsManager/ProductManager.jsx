import React from "react";
import SlideBarAdmin from "../SliderBar/SlideBarAdmin";
import { AiFillDelete, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BiAddToQueue } from "react-icons/bi";

const ProductManager = () => {
  return (
    <>
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
              <tr>
                <td>1</td>
                <td>
                  <div className="content-img">
                    <img />
                  </div>
                </td>
                <td>Name MOvie</td>
                <td>Phim Hanh Dong</td>
                <td>10/06/2023</td>
                <td>
                  <AiFillDelete className="btn-delete" />
                </td>
              </tr>
            </tbody>
          </table>
          <button className="btn-add">
            <AiOutlineVideoCameraAdd />
            Add Movie
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductManager;
