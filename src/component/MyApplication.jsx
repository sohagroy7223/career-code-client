import React, { use, useEffect } from "react";
import useAxios from "../Hook/useAxios";
import { AuthContext } from "../context/AuthContext";

const MyApplication = () => {
  const instance = useAxios();
  const { user } = use(AuthContext);
  //   console.log(user.email);
  useEffect(() => {
    instance
      .get(`/applyJobs?email=${user.email}`)
      .then((res) => [console.log(res.data)]);
  }, []);
  return (
    <div>
      <h3>this my application se</h3>
    </div>
  );
};

export default MyApplication;
