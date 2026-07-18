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
    hr_name,
    hr_email,
  } = data;
  return (
    <div>
      <div className="list bg-base-100 rounded-box shadow-md ">
        <li className="list-row">
          <div>
            <img className="size-15 rounded-box" src={company_log} />
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
      <div className="bg-base-100 mt-10 p-3 flex w-full gap-5 ">
        <div className="space-y-6 p-5 bg-gray-100 w-[70%] rounded-lg">
          <div>
            <h3 className="font-bold text-lg">Job Description</h3>
            <p>{description}</p>
          </div>
          <div>
            <h3 className="font-bold text-lg">responsibilities</h3>
            <div>
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="doted">
                  <p>{responsibility}</p>
                </li>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg">requirements</h3>
            <div>
              {requirements.map((requirement, index) => (
                <li key={index} className="doted">
                  <p>{requirement}</p>
                </li>
              ))}
            </div>
          </div>
          <div>
            <h3>
              Hr Name: <span className="font-bold">{hr_name}</span>
            </h3>
            <h3>
              Hr Name: <span className="font-bold">{hr_email}</span>
            </h3>
          </div>
          <div>
            <h3>
              <span className="font-bold">Date</span>: {applicationDeadline}
            </h3>
          </div>
        </div>
        <div className=" p-5 w-[30%] bg-gray-100 rounded-lg space-y-5">
          <h3 className="font-bold text-center text-lg">Job Details</h3>
          <div>
            <p className="text-lg">Job Title : </p>
            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <div>
            <p className="text-lg">Company : </p>
            <h3 className="font-bold text-lg">{company}</h3>
          </div>
          <div>
            <p className="text-lg">Job Type : </p>
            <h3 className="font-bold text-lg">{jobType}</h3>
          </div>
          <div>
            <p className="text-lg"> Work Place : </p>
            <h3 className="font-bold text-lg">{workplace}</h3>
          </div>
          <div>
            <p className=" text-lg"> Job Location : </p>
            <h3 className="font-bold text-lg">{location}</h3>
          </div>
          <div>
            <p className=" text-lg">Salary : </p>
            <h3 className="font-bold text-lg">{salary}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
