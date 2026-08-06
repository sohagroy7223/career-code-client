import React from "react";
import { IoLocation } from "react-icons/io5";
import { MdHourglassFull } from "react-icons/md";
import { VscRemoteExplorer } from "react-icons/vsc";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";

const AllPostedJobs = ({ jobs, setPostedJobs, postedJobs, setTotal }) => {
  const { _id, company_log, company, title, jobType, workplace, location } =
    jobs;
  const instance = useAxios();
  //   console.log(jobs);
  const handelDelete = (id) => {
    // console.log("delete this item", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        instance.delete(`/jobs/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            const remainingJobs = postedJobs.filter((job) => job._id != id);
            setPostedJobs(remainingJobs);
            setTotal(remainingJobs);
          }
        });
      }
    });
  };
  return (
    <div className="list bg-base-100 rounded-box shadow-md ">
      <li className="list-row ">
        <div>
          <img className="size-15 rounded-box" src={company_log} />
        </div>
        <div className="space-y-4 ">
          <h3 className="md:text-2xl font-bold text-md ">{title}</h3>
          <div className="text-xs uppercase font-semibold opacity-60 md:flex md:gap-29">
            <span>{company}</span>
            <div className="md:flex md:gap-14 space-y-3 md:space-y-0 mt-3 md:mt-0">
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
        <div className="flex justify-center items-center gap-2">
          <button className="btn  btn-xs btn-outline">edit</button>
          <button
            onClick={() => handelDelete(_id)}
            className="btn btn-xs btn-outline"
          >
            delete
          </button>
        </div>
      </li>
    </div>
  );
};

export default AllPostedJobs;
