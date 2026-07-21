import React, { useEffect } from "react";
import Navbar from "../UI/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router";
import Footer from "../UI/Footer";
import Loading from "../component/Loading";

const Root = () => {
  const { state } = useNavigate();
  const { pathname } = useLocation();
  // console.log(state);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 mx-auto bg-gray-50 space-y-10">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
