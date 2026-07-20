import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";

const Favorite = ({ favorite }) => {
  const { _id, logo, title, company, jobType, workplace, location } = favorite;
  return (
    <div className="list bg-base-100 rounded-box shadow-md ">
      <li className="list-row">
        <div>
          <img className="size-15 rounded-box" src={logo} />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="text-xs uppercase font-semibold opacity-60 flex gap-29 ">
            {company}
            <div className=" gap-14 space-y-4 ">
              <p className="flex gap-2 items-center">
                <MdHourglassFull size={15} />
                {jobType}
              </p>
              <p className="flex gap-2 items-center">
                {" "}
                <VscRemoteExplorer size={15} />
                {workplace}
              </p>
              <p className="flex gap-2 items-center">
                <IoLocation size={15} />
                {location}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center ">
          <button className="btn bg-primary text-gray-100">Apply Now</button>
        </div>
      </li>
    </div>
  );
};

export default Favorite;
