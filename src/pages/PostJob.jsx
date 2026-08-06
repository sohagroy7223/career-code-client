import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";
import { useNavigate } from "react-router";
import AllPostedJobs from "../component/AllPostedJobs";

const PostJob = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = use(AuthContext);
  const instance = useAxios();
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/postJob");
  };

  useEffect(() => {
    instance.get(`jobs?email=${user.email}`).then((res) => {
      setPostedJobs(res.data.Jobs);
      setTotal(res.data.Jobs);
    });
  }, [user]);
  // console.log(postedJobs);
  return (
    <div>
      <div className="flex justify-between px-5 items-center">
        <div>
          <h3 className="md:text-2xl text-md font-bold">
            My <span className="text-primary">Posted</span> Jobs
          </h3>
          <p>Manage your all posted jobs</p>
        </div>
        <button
          onClick={handelNavigate}
          className="bg-primary text-gray-100 btn btn-sm"
        >
          Add new Job
        </button>
      </div>
      <div className="space-y-3 mt-10">
        <p className="font-bold px-5 ">
          {" "}
          total jobs <span className="text-primary">{postedJobs.length}</span>
        </p>
        {postedJobs.length === 0 ? (
          <div className="flex flex-col justify-center items-center mt-10">
            <img className="w-70" src="imageJobs.png" alt="" />
            <h3 className="md:text-4xl text-2xl text-center py-5 font-bold">
              Not found any <br /> jobs here
            </h3>
          </div>
        ) : (
          postedJobs.map((jobs) => (
            <AllPostedJobs
              key={jobs._id}
              postedJobs={postedJobs}
              setPostedJobs={setPostedJobs}
              setTotal={setTotal}
              jobs={jobs}
            ></AllPostedJobs>
          ))
        )}
      </div>
    </div>
  );
};

export default PostJob;
