import React from "react";

const Popular = ({ popular }) => {
  //   console.log(popular);
  return (
    <div className="card border items-center rounded-2xl ">
      <div className="card-body items-center text-center">
        <img className="w-15  bg-cover rounded-md" src={popular.image} alt="" />
        <h2 className="card-title">{popular.category}</h2>
        <h2>{popular.title}</h2>
      </div>
    </div>
  );
};

export default Popular;
