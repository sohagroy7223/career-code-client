import React from "react";
import banner from "../assets/banner.png";
import { useNavigate } from "react-router";

const Banner = () => {
  const navigate = useNavigate();
  const AllPage = () => {
    navigate("allJobs");
  };
  const PostJob = () => {
    navigate("postJob");
  };
  return (
    <div className="md:flex justify-center items-center p-8 ">
      <div className="space-y-5 md:w-170">
        <p className="text-primary p-2 bg-white w-40 rounded-2xl">
          find your Dream job
        </p>
        <h3 className="md:text-5xl text-3xl font-bold text-center md:text-start">
          Discover Endless Career{" "}
          <span className="text-primary">Opportunities</span>{" "}
        </h3>
        <p className="">
          Explore thousands of job listings find the right <br /> fit apply with
          easy and take the next step in your career{" "}
        </p>
        <div className="flex gap-6">
          <button onClick={AllPage} className="btn bg-primary text-white">
            Browser All jobs
          </button>
          <button onClick={PostJob} className="btn btn-neutral btn-outline">
            Post A Job
          </button>
        </div>
      </div>
      <div>
        <img className="w-full" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
