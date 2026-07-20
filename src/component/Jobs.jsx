import React, { use, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { Link } from "react-router";
import useAxios from "../Hook/useAxios";
import { IoMdBookmark } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";

const Jobs = ({ jobs, setFavorite, favorite }) => {
  const { user } = use(AuthContext);
  const email = user.email;
  const instance = useAxios();

  const { _id, company_log, title, company, jobType, workplace, location } =
    jobs;

  // console.log(favorite);

  const handelBookMark = (_id) => {
    // console.log("book mark", _id);
    instance
      .post("/favoriteJob", {
        logo: company_log,
        email: email,
        jobId: _id,
        title: title,
        company: company,
        jobType: jobType,
        workplace: workplace,
        location: location,
        favorite: "true",
      })
      .then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          setFavorite((prev) => [...prev, _id]);
        }
      });
  };
  // console.log(favorite);
  return (
    <div className="list rounded-box shadow-md ">
      <li className="list-row">
        <div>
          <img className="size-15 rounded-box" src={company_log} />
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
        <button
          onClick={() => handelBookMark(_id)}
          disabled={favorite.includes(_id)}
          className={`text-2xl  ${
            favorite.includes(_id)
              ? "text-black  cursor-not-allowed"
              : "text-gray-400 cursor-pointer"
          }`}
        >
          <IoMdBookmark />
        </button>
      </li>
      <Link className="btn cursor-pointer " to={`/jobsDetails/${_id}`}>
        view details
      </Link>
    </div>
  );
};

export default Jobs;
