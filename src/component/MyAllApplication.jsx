import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";

const MyAllApplication = ({ apply }) => {
  const { jobId, companyLogo, title, company, jobType, workplace, location } =
    apply;

  return (
    <div className="list rounded-box shadow-md">
      <li className="list-row">
        <div>
          <img className="size-15 rounded-box" src={companyLogo} />
        </div>
        <div className="space-y-5">
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
      </li>
      <button className="btn cursor-pointer ">view details</button>
    </div>
  );
};

export default MyAllApplication;
