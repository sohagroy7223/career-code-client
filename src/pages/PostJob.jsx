import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";
import { useNavigate } from "react-router";
import AllPostedJobs from "../component/AllPostedJobs";

const PostJob = () => {
  const [postedJobs, setPostedJobs] = useState([]);
  const { user } = use(AuthContext);
  const instance = useAxios();
  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate("/postJob");
  };

  useEffect(() => {
    instance.get(`jobs?email=${user.email}`).then((res) => {
      setPostedJobs(res.data.Jobs);
    });
  }, [user]);
  // console.log(postedJobs);
  return (
    <div>
      <div className="flex justify-between px-5 items-center">
        <div>
          <h3 className="text-xl font-bold">My Posted Jobs</h3>
          <p>Manage your all posted jobs</p>
        </div>
        <button
          onClick={handelNavigate}
          className="bg-primary text-gray-100 btn"
        >
          Add new Job
        </button>
      </div>
      <div>
        {postedJobs.map((jobs) => (
          <AllPostedJobs key={jobs._id} jobs={jobs}></AllPostedJobs>
        ))}
      </div>
    </div>
  );
};

export default PostJob;
