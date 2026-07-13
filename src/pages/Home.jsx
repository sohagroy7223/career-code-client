import React, { useState } from "react";
import Banner from "../component/Banner";
import Popular from "../UI/Popular";
import useAxios from "../Hook/useAxios";

const Home = () => {
  const [popularJob, setPopularJob] = useState([]);
  const instance = useAxios();

  useState(() => {
    instance.get("/popular-jobs").then((res) => {
      // console.log(res.data);
      setPopularJob(res.data);
    });
  }, []);
  // console.log(popularJob);
  return (
    <div className="space-y-10">
      <Banner></Banner>
      <h3 className="text-3xl font-bold mb-5 text-center mt-3">
        Popular <span className="text-primary">job</span>
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 ">
        {popularJob.map((popular) => (
          <Popular key={popular._id} popular={popular}></Popular>
        ))}
      </div>
    </div>
  );
};

export default Home;
