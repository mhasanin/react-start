import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from './../NavBar/NavBar';
import Footer from './../Footer/Footer';

const Layout = () => {
  return (
    <>
      <NavBar />

      <div className=".home-container ">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
