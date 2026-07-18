import React from "react";
import { CiBookmark } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { Link } from "react-router";

const Jobs = ({ jobs }) => {
  const { _id, company_log, title, company, jobType, workplace, location } =
    jobs;
  //   console.log(jobs);

  return (
    <Link
      className="list bg-base-100 rounded-box shadow-md cursor-pointer"
      to={`/jobsDetails/${_id}`}
    >
      <li className="list-row">
        <div>
          <img className="size-15 rounded-box" src={company_log} />
        </div>
        <div className="space-y-4">
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
        <CiBookmark size={20} />
      </li>
    </Link>
  );
};

export default Jobs;
