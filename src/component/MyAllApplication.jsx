import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoDocument, IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";

const MyAllApplication = ({ apply }) => {
  const [showDetails, setShowDetails] = useState(false);
  const {
    jobId,
    companyLogo,
    title,
    company,
    jobType,
    workplace,
    location,
    name,
    email,
    phone,
    experience,
    skill,
    portfolio,
    github,
    linkedin,
    coverLater,
  } = apply;

  const handelBtnToggle = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="list rounded-box shadow-md border border-primary border-dashed">
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
          {showDetails && (
            <div className="mt-5 pt-4 flex justify-center gap-5 bg-gray-100 rounded-2xl">
              <div className="space-y-3 p-3 border-r border-primary border-dashed">
                <h3 className="flex items-center gap-3 text-2xl font-medium">
                  <FaUserCircle size={25} />
                  Personal Information
                </h3>
                <p className="flex items-center gap-2">
                  <strong>Applicant Name</strong>: {name}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Email:</strong> {email}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Phone:</strong> {phone}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Experience:</strong> {experience}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Skills:</strong> {skill}
                </p>
                <p className="flex items-center gap-2">
                  <strong>Portfolio:</strong>{" "}
                  <span className="text-primary cursor-pointer">
                    <a target="_blank" href={portfolio}>
                      portfolio
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <strong>GitHub :</strong>{" "}
                  <span className="text-primary cursor-pointer">
                    <a target="_blank" href={github}>
                      GitHub
                    </a>
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <strong>LinkedIn:</strong>{" "}
                  <span className="text-primary cursor-pointer">
                    <a target="_blank" href={linkedin}>
                      Linkedin
                    </a>
                  </span>
                </p>
              </div>
              <div className="space-y-3 p-3">
                <h3 className="flex  gap-3 text-2xl font-medium">
                  <IoDocument size={25} />
                  Cover Letter
                </h3>
                <p>{coverLater}</p>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-center items-center">
          <button
            onClick={handelBtnToggle}
            className="btn cursor-pointer bg-primary text-gray-100"
          >
            {showDetails ? "Hide Details" : "view details"}
          </button>
        </div>
      </li>
    </div>
  );
};

export default MyAllApplication;
