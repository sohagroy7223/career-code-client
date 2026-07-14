import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";

const Jobs = ({ jobs }) => {
  const { company_log, title, company, jobType, workplace, location } = jobs;
  //   console.log(jobs);
  return (
    <ul className="list bg-base-100 rounded-box shadow-md ">
      <li className="list-row">
        <div>
          <img className="size-15 rounded-box" src={company_log} />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">{title}</h3>
          <div className="text-xs uppercase font-semibold opacity-60 flex gap-29 ">
            {company}
            <div className="md:flex gap-14">
              <p>{jobType}</p>
              <p>{workplace}</p>
              <p className="flex gap-2 items-center">
                <IoLocation />
                {location}
              </p>
            </div>
          </div>
        </div>

        <button className="btn btn-square btn-ghost">
          <svg
            className="size-[1.2em]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2"
              fill="none"
              stroke="currentColor"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
            </g>
          </svg>
        </button>
      </li>
    </ul>
  );
};

export default Jobs;
