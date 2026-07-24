import React from "react";
import logo from "../assets/careerCode.png";
import { FaCode, FaRegUser } from "react-icons/fa";
import { HiLink } from "react-icons/hi";
import { FaClipboardUser } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";
import { MdCloudUpload } from "react-icons/md";

const Form = () => {
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
    const document = e.target.document.files[0];
    const url = URL.createObjectURL(document);
    const coverLater = e.target.coverLater.value;
    console.log(
      name,
      email,
      number,
      position,
      experience,
      skill,
      portfolio,
      github,
      linkedin,
      url,
      coverLater,
    );
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <h2 className="flex items-center gap-4 text-2xl font-bold">
          <FaCode size={25}></FaCode>{" "}
          <span className="text-primary">Careers</span>
        </h2>
        <h3 className="md:text-3xl text-lg font-black">
          Developer Application <span className="text-primary">Form</span>
        </h3>
        <p className="text-gray-600 md:text-lg ">
          Fill in the details below to apply for the position. We'll get back to{" "}
          <br></br>
          you if your profile matches our Requirements
        </p>
      </div>
      <form onSubmit={handelApplicationSubmit}>
        <div className="w-11/12 mx-auto md:flex border p-4 gap-4 ">
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
                      placeholder="your job experience year"
                    />
                  </div>
                  <div className="fieldset">
                    <label className="label md:text-2xl text-lg">Skill :</label>
                    <input
                      type="text"
                      className="input"
                      name="skill"
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
                  placeholder="http[s://github.com/username"
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

              <input type="file" name="document" className="file-input mt-10" />

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
        <div className="w-full flex justify-center ">
          <button className="btn bg-primary text-gray-50">
            Submit Application
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
