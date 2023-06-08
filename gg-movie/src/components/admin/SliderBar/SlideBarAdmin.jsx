import './SlideBarAdmin.css'
import {BiLogOut} from 'react-icons/bi'
import {RiAdminFill} from 'react-icons/ri'
import { Link, useLocation } from 'react-router-dom';
function SlideBarAdmin() {
  const router = useLocation()

  return (
    <div className="sidebar-wrappers">
      <div className="logo">
        <h4 className='logo-admin'><RiAdminFill style={{color: "white !important"}}/> CGV Cinema</h4>
      </div>
      <div className="group-btn">
        <ul className='list-manager'>
          <li className={router.pathname === "/admin/user-managerment" ? "active":""}>
          <Link to={"/admin/user-managerment"}>
          <i class="fa-solid fa-users"></i>
          <span>User Managerment</span>
          </Link>
          </li>
          <li className={router.pathname === "/admin/history-order" ? "active":""}>
          <Link to={"/admin/history-order"}>
          <i class="fa-solid fa-cart-shopping"></i>
          <span>History Order</span>
          </Link>
          </li>
          <li className={router.pathname === "/admin/products-manager" ? "active":""}>
         <Link to={"/admin/products-manager"}>
         <i class="fa-solid fa-film"></i>
          <span>Products Managerment</span>
         </Link>
          </li>
        </ul>
      </div>
      <div className='sign-out'>
        <button className='btn-sign-out'>
            <BiLogOut/> Logout
        </button>
      </div>
    </div>
  );
}

export default SlideBarAdmin;