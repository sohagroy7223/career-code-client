import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineBookmarkBorder } from "react-icons/md";

const Feature = ({ feature }) => {
  //   console.log(feature);
  return (
    <div className="card border items-center rounded-2xl">
      <div className="card-body items-center text-center">
        <div className="flex justify-between gap-5 ">
          <img
            className="w-15  bg-cover rounded-md"
            src={feature.company_log}
            alt=""
          />
          {/* <MdOutlineBookmarkBorder size={25} /> */}
        </div>
        <h2 className="card-title ">{feature.company}</h2>
        {/* <h2 className="card-title ">{feature.category}</h2> */}
        <h2 className="card-title ">{feature.title}</h2>
        <div className="flex justify-between gap-4">
          <h2 className="card-title bg-gray-200 p-1 rounded-lg">
            {feature.jobType}
          </h2>
          <h2 className="card-title bg-gray-200 p-1 rounded-lg">
            {feature.workplace}
          </h2>
        </div>
        <div className="flex justify-between items-center gap-5 mt-3">
          <IoLocationSharp size={20} />
          <h2 className="card-title ">{feature.location}</h2>
        </div>
      </div>
    </div>
  );
};

export default Feature;
