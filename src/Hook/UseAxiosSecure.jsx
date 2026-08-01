import axios from "axios";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

const useAxiosSecure = () => {
  const { user } = use(AuthContext);
  instance.interceptors.request.use((config) => {
    // console.log("after config");
    config.headers.authorization = `barer ${user.accessToken}`;
    return config;
  });

  return instance;
};

export default useAxiosSecure;
