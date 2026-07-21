import React from "react";
import logo from "../assets/careerCode.png";
import { FaCode, FaRegUser } from "react-icons/fa";

const Form = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-4 flex flex-col justify-center items-center">
        <h2 className="flex items-center gap-4 text-2xl font-bold">
          <FaCode size={25}></FaCode>{" "}
          <span className="text-primary">Careers</span>
        </h2>
        <h3 className="text-3xl font-black">
          Developer Application <span className="text-primary">Form</span>
        </h3>
        <p className="text-gray-600 text-lg text-center">
          Fill in the details below to apply for the position. We'll get back to{" "}
          <br></br>
          you if your profile matches our Requirements
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="bg-blue-100 w-12 p-3 rounded-full border">
          <FaRegUser size={23} />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Form;
