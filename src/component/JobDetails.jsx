import React, { use } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    applicationDeadline,
    category,
    company,
    company_log,
    description,
    experience,
    jobType,
    location,
    requirements,
    responsibilities,
    salary,
    title,
    vacancy,
    workplace,
  } = data;
  return (
    <div>
      <div className="list bg-base-100 rounded-box shadow-md cursor-pointer">
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
          <div className="flex justify-center items-center ">
            <button className="btn bg-primary text-gray-100">Apply Now</button>
          </div>
        </li>
      </div>
      <div></div>
    </div>
  );
};

export default JobDetails;
