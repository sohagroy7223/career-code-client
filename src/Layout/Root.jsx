import React from "react";
import Navbar from "../UI/Navbar";
import { Outlet, useNavigate } from "react-router";
import Footer from "../UI/Footer";
import Loading from "../component/Loading";

const Root = () => {
  const { state } = useNavigate();
  // console.log(state);
  return (
    <div className="w-11/12 mx-auto bg-gray-50 space-y-10">
      <Navbar></Navbar>
      {state === "loading" ? <Loading></Loading> : <Outlet></Outlet>}
      <Footer></Footer>
    </div>
  );
};

export default Root;
