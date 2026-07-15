import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router";

const Error404 = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
        <button
          onClick={back}
          className="flex items-center gap-2 border p-1 rounded-full cursor-pointer"
        >
          <IoMdArrowBack size={20} />
          Back to Home page
        </button>
        <img className="w-md" src="Error page.png" alt="" />
        <h3 className="text-3xl font-bold italic">
          {" "}
          Can't found this <span className="text-primary">Page</span>{" "}
        </h3>
      </div>
    </div>
  );
};

export default Error404;
