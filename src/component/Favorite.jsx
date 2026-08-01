import React from "react";
import { FaBookmark } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { Link } from "react-router";

const Favorite = ({ favorite }) => {
  // console.log(favorite._id);
  const { _id, jobId, logo, title, company, jobType, workplace, location } =
    favorite;

  return (
    <div className="list rounded-box shadow-md border border-dashed border-gray-300 mt-10">
      <li className="list-row flex justify-between items-center ">
        <div className="md:flex gap-14 space-y-3 md:space-y-0 ">
          <div>
            <img className="size-15 rounded-box" src={logo} />
          </div>
          <div className="space-y-5 ">
            <h3 className="text-2xl font-bold">{title}</h3>
            <div className="text-xs uppercase font-semibold opacity-60 flex gap-29 ">
              {company}
              <div className="md:flex gap-14 space-y-3 md:space-y-0">
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
        </div>
      </li>
      <Link className="btn cursor-pointer " to={`/jobsDetails/${jobId}`}>
        view details
      </Link>
    </div>
  );
};

export default Favorite;
