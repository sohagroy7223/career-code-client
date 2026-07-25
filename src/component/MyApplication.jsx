import React, { use, useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import { AuthContext } from "../context/AuthContext";
import MyAllApplication from "./MyAllApplication";

const MyApplication = () => {
  const [application, setApplication] = useState([]);
  const instance = useAxios();
  const { user } = use(AuthContext);
  //   console.log(user.email);
  useEffect(() => {
    instance.get(`/applyJobs?email=${user.email}`).then((res) => {
      setApplication(res.data);
    });
  }, [user]);
  //   console.log(application);
  return (
    <div>
      <h3 className="text-2xl font-bold text-center">
        All <span className="text-primary ">Application</span>
      </h3>
      <hr className="text-gray-300 divide-dotted" />
      <div className="mt-10 space-y-10">
        {application.map((apply) => (
          <MyAllApplication key={apply._id} apply={apply}></MyAllApplication>
        ))}
      </div>
    </div>
  );
};

export default MyApplication;
