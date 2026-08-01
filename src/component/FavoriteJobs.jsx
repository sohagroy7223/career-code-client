import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";
import Favorite from "./Favorite";

const FavoriteJobs = () => {
  const { user } = use(AuthContext);
  // console.log(user);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get(`/favoriteJob?email=${user.email}`).then((res) => {
      //   console.log(res.data);
      setFavoriteJobs(res.data);
    });
  }, [user]);
  // console.log(favoriteJobs);
  return (
    <div>
      <div className="text-center p-2">
        <h3 className="text-xl font-bold">
          My All <span className="text-primary">Favorite</span> Jobs
        </h3>
        <p>Manage favorite jobs</p>
      </div>
      {favoriteJobs.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-52" src="imageJobs.png" alt="" />
          <h3 className="text-4xl text-center py-5 font-bold">
            Not found any <br /> Favorite jobs here
          </h3>
        </div>
      ) : (
        <div className="md:flex md:flex-col gap-5">
          {favoriteJobs.map((favorite) => (
            <Favorite
              key={favorite._id}
              setFavoriteJobs={setFavoriteJobs}
              favorite={favorite}
            ></Favorite>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteJobs;
