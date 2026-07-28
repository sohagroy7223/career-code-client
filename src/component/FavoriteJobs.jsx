import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";
import Favorite from "./Favorite";

const FavoriteJobs = () => {
  const { user } = use(AuthContext);
  const [favoriteJobs, setFavoriteJobs] = useState([]);
  const instance = useAxios();
  useEffect(() => {
    instance.get(`/favoriteJob?email=${user.email}`).then((res) => {
      //   console.log(res.data);
      setFavoriteJobs(res.data);
    });
  }, [user]);
  //   console.log(favoriteJobs);
  return (
    <div>
      {favoriteJobs.length === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img className="w-52" src="imageJobs.png" alt="" />
          <h3 className="text-4xl text-center py-5 font-bold">
            Not found any <br /> Favorite jobs here
          </h3>
        </div>
      ) : (
        favoriteJobs.map((favorite) => (
          <Favorite key={favorite._id} favorite={favorite}></Favorite>
        ))
      )}
    </div>
  );
};

export default FavoriteJobs;
