import React from "react";

const Popular = ({ popular }) => {
  //   console.log(popular);
  return (
    <div className="card border items-center rounded-2xl ">
      <div className="card-body items-center text-center">
        <img
          className="w-12 h-9 bg-cover rounded-md"
          src={popular.company_logo}
          alt=""
        />
        <h2 className="card-title">{popular.title}</h2>
      </div>
    </div>
  );
};

export default Popular;
