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
      <div>
        <div className="md:text-center p-2">
          <h3 className="text-2xl font-bold md:text-center p-2">
            All <span className="text-primary ">Application</span>
          </h3>
          <p>Manage your all Applied jobs</p>
        </div>
      </div>

      <div className="mt-10 space-y-10">
        {application.length === 0 ? (
          <div className="flex flex-col justify-center items-center">
            <img className="w-52" src="imageJobs.png" alt="" />
            <h3 className="text-4xl text-center py-5 font-bold">
              Not found any <br />
              Appled jobs here
            </h3>
          </div>
        ) : (
          application.map((apply) => (
            <MyAllApplication key={apply._id} apply={apply}></MyAllApplication>
          ))
        )}
      </div>
    </div>
  );
};

export default MyApplication;
