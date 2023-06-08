import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ComponentsChild from "../../components/ComponentsChild";

const HomePages = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer/>
    </>
  );
};

export default HomePages;
