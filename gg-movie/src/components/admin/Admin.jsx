import React from 'react'
import SlideBarAdmin from './SliderBar/SlideBarAdmin'
import Users from './User/Users'
import { Link, Outlet } from 'react-router-dom'
import HistoryProducts from './HistoryProducts/HistoryProducts'

const Admin = () => {

  return (
    <>
     <Outlet/>
    </>
  )
}

export default Admin