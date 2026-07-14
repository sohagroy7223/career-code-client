import React from "react";
import Navbar from "../UI/Navbar";
import { Outlet } from "react-router";
import Footer from "../UI/Footer";

const Root = () => {
  return (
    <div className="w-11/12 mx-auto bg-gray-50 space-y-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
