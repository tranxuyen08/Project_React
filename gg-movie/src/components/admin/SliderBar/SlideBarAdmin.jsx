import './SlideBarAdmin.css'
import {BiLogOut} from 'react-icons/bi'
import {RiAdminFill} from 'react-icons/ri'
import { Link, useLocation, useNavigate } from 'react-router-dom';
function SlideBarAdmin() {
  const navigate = useNavigate()
  const router = useLocation()
  const admin = JSON.parse(localStorage.getItem('user')) ??{}
  const handleLogOut = () =>{
     localStorage.removeItem("user");
     localStorage.removeItem("accessTokenLogin");
    navigate("/")
  }

  return (
    <div className="sidebar-wrappers">
      <div className="logo">
        <h4 className='logo-admin'><RiAdminFill style={{color: "white !important"}}/> <span>CGV Cinema</span></h4>
      </div>
      <div className="group-btn">
        <ul className='list-manager'>
          <li className={router.pathname === "/admin/user-managerment" ? "active":""}>
          <Link to={"/admin/user-managerment"}>
          <i class="fa-solid fa-users"></i>
          <span>Quản Lý Người Dùng</span>
          </Link>
          </li>
          <li className={router.pathname === "/admin/history-order" ? "active":""}>
          <Link to={"/admin/history-order"}>
          <i class="fa-solid fa-cart-shopping"></i>
          <span>Lịch Sử Mua Hàng</span>
          </Link>
          </li>
          <li className={router.pathname === "/admin/products-manager" ? "active":""}>
         <Link to={"/admin/products-manager"}>
         <i class="fa-solid fa-film"></i>
          <span>Quản Lý Sản Phẩm</span>
         </Link>
          </li>
        </ul>
      </div>
      <div className='sign-out'>
        <button onClick={handleLogOut} className='btn-sign-out'>
            <BiLogOut/> <span>Đăng Xuất</span>
        </button>
      </div>
    </div>
  );
}

export default SlideBarAdmin;