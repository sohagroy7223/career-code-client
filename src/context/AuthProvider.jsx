import React from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  const userInfo = {
    name: "sohag",
    email: "sohag@gmail.com",
  };

  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
