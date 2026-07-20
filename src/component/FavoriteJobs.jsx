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
      {favoriteJobs.map((favorite) => (
        <Favorite key={favorite._id} favorite={favorite}></Favorite>
      ))}
    </div>
  );
};

export default FavoriteJobs;
