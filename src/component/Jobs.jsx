import React, { use, useState } from "react";

import { FaSearch } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import { Link, Navigate, useNavigate } from "react-router";
import useAxios from "../Hook/useAxios";
import { IoMdBookmark } from "react-icons/io";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const Jobs = ({ jobs, setFavorite, favorite }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate();
  const email = user.email;
  const instance = useAxios();

  const { _id, company_log, title, company, jobType, workplace, location } =
    jobs;

  // console.log(favorite);

  const handelBookMark = (_id) => {
    const isFavorite = favorite.includes(_id);

    if (isFavorite) {
      instance
        .delete(`/favoriteJob`, {
          data: {
            email: user.email,
            jobId: _id,
          },
        })
        .then((res) => {
          if (res.data.deletedCount > 0) {
            setFavorite((prev) => prev.filter((id) => id !== _id));
          }
        });
    } else {
      user
        ? instance
            .post("/favoriteJob", {
              logo: company_log,
              email: user.email,
              jobId: _id,
              title,
              company,
              jobType,
              workplace,
              location,
            })
            .then((res) => {
              if (res.data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: "your job has been favorite",
                  showConfirmButton: false,
                  timer: 1500,
                });
                setFavorite((prev) => [...prev, _id]);
              }
            })
        : navigate("/login");
    }
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
          className={`text-2xl tooltip  ${
            favorite.includes(_id)
              ? "text-black "
              : "text-gray-400 cursor-pointer"
          }`}
          data-tip={`${favorite.includes(_id) ? "remove to favorite" : "Add to Favorite"}`}
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
