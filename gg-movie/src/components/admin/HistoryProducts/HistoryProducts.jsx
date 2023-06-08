import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import '../User/Users.css'
import SlideBarAdmin from '../SliderBar/SlideBarAdmin'
const HistoryProducts = () => {
  return (
    <div className="content-user">
      <SlideBarAdmin/>
      <div className="table-content">
        <div className="wrapper-title"><span className="sperator"></span><span className="title-page">History Orders</span></div>
        <table>
          <thead>
            <tr>
              <th>NO</th>
              <th>ID User</th>
              <th>Email</th>
              <th>Name Movie</th>
              <th>qty</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>NO</td>
              <td>ID User</td>
              <td>Email</td>
              <td>Name MOvie</td>
              <td>2</td>
              <td>110.000VND</td>
              <td>
                <AiFillDelete className="btn-delete"/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HistoryProducts