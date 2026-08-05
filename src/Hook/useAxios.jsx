import axios from "axios";

const instance = axios.create({
  baseURL: "https://career-code-server-2.onrender.com/",
});
import React, { useEffect } from "react";
import useAuth from "./useAuth";

const useAxios = () => {
  const { user } = useAuth();

  useEffect(() => {
    const decode = instance.interceptors.request.use((config) => {
      config.headers.authorization = `Bearer ${user.accessToken}`;
      return config;
    });
    return () => {
      instance.interceptors.response.eject(decode);
    };
  }, [user]);
  return instance;
};
export default useAxios;
