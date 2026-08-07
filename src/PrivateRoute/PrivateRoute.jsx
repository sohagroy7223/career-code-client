import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = use(AuthContext);
  // console.log(user);
  const location = useLocation();
  if (user) {
    return children;
  }
  // if (!user) {
  //   return <Navigate state={{ from: location }} to="/login" replace />;
  // }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;
