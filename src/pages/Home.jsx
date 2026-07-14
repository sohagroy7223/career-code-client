import React, { useState } from "react";
import Banner from "../component/Banner";
import Popular from "../UI/Popular";
import useAxios from "../Hook/useAxios";
import Feature from "../UI/Feature";

const Home = () => {
  const [popularJob, setPopularJob] = useState([]);
  const [featureJob, setFeatureJob] = useState([]);
  const instance = useAxios();

  useState(() => {
    instance.get("/popular-jobs").then((res) => {
      // console.log(res.data);
      setPopularJob(res.data);
    });
    instance.get("/featured-jobs").then((res) => {
      // console.log(res.data);
      setFeatureJob(res.data);
    });
  }, []);
  // console.log(popularJob);
  // console.log(featureJob);
  return (
    <div className="space-y-20 p-4">
      <Banner></Banner>
      <h3 className="text-3xl font-bold mb-5 text-center mt-3">
        Popular <span className="text-primary">job</span>
      </h3>
      {/* popular job */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
        {popularJob.map((popular) => (
          <Popular key={popular._id} popular={popular}></Popular>
        ))}
      </div>
      {/* featured job */}
      <h3 className="text-3xl font-bold mb-5 text-center mt-3">
        Featured <span className="text-primary">job</span>
      </h3>
      <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
        {featureJob.map((feature) => (
          <Feature feature={feature}></Feature>
        ))}
      </div>
    </div>
  );
};

export default Home;
