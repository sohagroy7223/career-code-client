import React from "react";
import Navbar from "../UI/Navbar";
import { Outlet } from "react-router";
import Footer from "../UI/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
