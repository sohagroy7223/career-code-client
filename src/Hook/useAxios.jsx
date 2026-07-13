import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});
import React from "react";

const useAxios = () => {
  return instance;
};
export default useAxios;
