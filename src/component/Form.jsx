import React, { use, useEffect, useState } from "react";
import logo from "../assets/careerCode.png";
import { FaCode, FaRegUser } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { FaClipboardUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";
import useAxios from "../Hook/useAxios";

import Swal from "sweetalert2";
import { useParams } from "react-router";

import { AuthContext } from "../context/AuthContext";
import useAxiosSecure from "../Hook/UseAxiosSecure";

const Form = () => {
  const [job, setJob] = useState({});
  const { user } = use(AuthContext);
  const { id } = useParams();

  //   console.log(user);
  const instance = useAxios();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    instance.get(`/jobs/${id}`).then((res) => {
      setJob(res.data);
    });
  }, []);
  //   console.log(job);
  const handelApplicationSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const position = e.target.position.value;
    const experience = e.target.experience.value;
    const skill = e.target.skill.value;
    const portfolio = e.target.portfolio.value;
    const github = e.target.github.value;
    const linkedin = e.target.linkedin.value;
    // const resume = e.target.resume.files[0];
    const coverLater = e.target.coverLater.value;

    const application = {
      name: name,
      email: email,
      phone: number,
      position: position,
      experience: experience,
      skill: skill,
      portfolio: portfolio,
      github: github,
      linkedin: linkedin,
      coverLater: coverLater,
      // Job Information
      jobId: job._id,
      title: job.title,
      company: job.company,
      companyLogo: job.company_log,
      location: job.location,
      jobType: job.jobType,
      workplace: job.workplace,
    };
    // console.log(application);
    instance.post("/application", application).then((res) => {
      console.log("after secure call", res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your application has been submitted",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

    // console.log(
    //   name,
    //   email,
    //   number,
    //   position,
    //   experience,
    //   skill,
    //   portfolio,
    //   github,
    //   linkedin,
    //   coverLater,
    // );
  };

  return (
    <div className="space-y-4 border">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <h2 className="flex items-center gap-4 text-2xl font-bold">
          <FaCode size={25}></FaCode>{" "}
          <span className="text-primary">Careers</span>
        </h2>
        <h3 className="md:text-3xl text-lg font-black">
          Developer Application <span className="text-primary">Form</span>
        </h3>
        <p className="text-gray-600 md:text-lg text-center">
          Fill in the details below to apply for the position. We'll get back to{" "}
          <br></br>
          you if your profile matches our Requirements
        </p>
      </div>
      <hr className="w-11/12 mx-auto border-dashed text-gray-400" />
      <form onSubmit={handelApplicationSubmit}>
        <div className="w-11/12 mx-auto md:flex  p-4 gap-4 ">
          <div className="md:w-6/12 p-2 ">
            <div className="flex gap-3 items-center ">
              <div className="bg-blue-100 w-12 p-3 rounded-full border">
                <FaRegUser size={23} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Personal Information</h3>
                <p className="font-medium">Tell us about your Self</p>
              </div>
            </div>
            <div className=" space-y-4 mt-5">
              <div className="fieldset">
                <label className="label md:text-2xl text-lg">Full Name :</label>
                <input
                  type="text"
                  className="input"
                  name="name"
                  defaultValue={user.displayName}
                  required
                  placeholder="Enter your full name"
                />
              </div>
              <div className="fieldset">
                <label className="label md:text-2xl text-lg">
                  Email Address :
                </label>
                <input
                  type="email"
                  className="input"
                  name="email"
                  defaultValue={user.email}
                  required
                  placeholder="Enter your email"
                />
              </div>
              <div className="fieldset">
                <label className="label md:text-2xl text-lg">
                  Phone Number :
                </label>
                <input
                  type="number"
                  className="input"
                  name="number"
                  required
                  placeholder="Enter your Phone Number"
                />
              </div>
              <hr />

              <div className="w-6/12  p-2">
                <div className="flex gap-3 items-center ">
                  <div className="bg-blue-100 w-12 p-3 rounded-full border">
                    <FaClipboardUser size={23} />
                  </div>
                  <div className=" w-full">
                    <h3 className="text-2xl  font-semibold">
                      Professional Information
                    </h3>
                    <p className="font-medium">Your work and skill</p>
                  </div>
                </div>
                <div className=" space-y-4 mt-5 ">
                  <div className="fieldset">
                    <label className="label md:text-2xl text-lg">
                      Position Applying For :
                    </label>
                    <select
                      defaultValue="Pick a Framework"
                      className="select select-info "
                      name="position"
                    >
                      <option disabled={true}>Select position</option>
                      <option>Front-End </option>
                      <option>Back-End</option>
                      <option>Full Stack</option>
                    </select>
                  </div>
                  <div className="fieldset ">
                    <label className="label md:text-2xl text-lg">
                      Year Of Experience :
                    </label>
                    <input
                      type="text"
                      className="input"
                      name="experience"
                      required
                      placeholder="your job experience year"
                    />
                  </div>
                  <div className="fieldset">
                    <label className="label md:text-2xl text-lg">Skill :</label>
                    <input
                      type="text"
                      className="input"
                      name="skill"
                      required
                      placeholder="React,Node.js, MongoDB, Tailwind CSS"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-6/12 p-2 ">
            <div className="flex gap-3 items-center ">
              <div className="bg-blue-100 w-12 p-3 rounded-full border">
                <HiLink size={23} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Portfolio & Links</h3>
                <p className="font-medium">Share your work and Profiles</p>
              </div>
            </div>
            <div className=" space-y-4 mt-5">
              <div className="fieldset ">
                <label className="label md:text-2xl text-lg">
                  Portfolio Website :
                </label>
                <input
                  type="text"
                  className="input"
                  name="portfolio"
                  required
                  placeholder="https://yourportfolio.com"
                />
              </div>
              <div className="fieldset">
                <label className="label md:text-2xl text-lg">
                  GitHub Profile :
                </label>
                <input
                  type="text"
                  className="input"
                  name="github"
                  required
                  placeholder="https://github.com/username"
                />
              </div>
              <div className="fieldset">
                <label className="label md:text-2xl text-lg">
                  Linkedin Profile :
                </label>
                <input
                  type="text"
                  className="input"
                  name="linkedin"
                  required
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
              <hr />
              <div className="flex gap-3 items-center ">
                <div className="bg-blue-100 w-12 p-3 rounded-full border">
                  <IoDocumentText size={23} />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Documents</h3>
                  <p className="font-medium">Upload or share your documents</p>
                </div>
              </div>

              <input type="file" name="resume" className="file-input mt-10" />

              <div>
                <label className="label md:text-2xl text-lg ">
                  Cover Later (optional) :
                </label>
                <textarea
                  name="coverLater"
                  className="w-full p-2 md:h-40"
                  placeholder="tall us why you're a grate fit for this role"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-2">
          <button className="btn bg-primary text-gray-50">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
