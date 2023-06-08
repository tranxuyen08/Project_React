import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { callListOrdersAPI } from "../../redux/reducer/ListOrdersSlice";
import { userManager } from "../../redux/reducer/UserSlice";

const Admin = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getListOrders = async () => {
      await dispatch(callListOrdersAPI()).unwrap();
    };
    getListOrders();
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      await dispatch(userManager()).unwrap();
    };
    getUsers();
  }, []);
  return (
    <>
      <Outlet />
    </>
  );
};

export default Admin;
