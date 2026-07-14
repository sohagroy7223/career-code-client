import React, { useEffect, useState } from "react";
import Banner from "../component/Banner";
import Popular from "../UI/Popular";
import useAxios from "../Hook/useAxios";
import Feature from "../UI/Feature";
import Company from "../UI/Company";

const Home = () => {
  const [popularJob, setPopularJob] = useState([]);
  const [featureJob, setFeatureJob] = useState([]);
  const [allCompany, setAllCompany] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/popular-jobs").then((res) => {
      // console.log(res.data);
      setPopularJob(res.data);
    });
    instance.get("/featured-jobs").then((res) => {
      // console.log(res.data);
      setFeatureJob(res.data);
    });
    instance.get("/all-company").then((res) => {
      // console.log(res.data);
      setAllCompany(res.data);
    });
  }, []);
  // console.log(popularJob);
  // console.log(featureJob);
  return (
    <div className="space-y-20 p-4">
      <Banner></Banner>
      <div>
        <div className="flex justify-between items-center p-3">
          <h3 className="text-3xl font-bold mb-5 text-center ">
            Popular <span className="text-primary">job</span>
          </h3>
          <button className="font-semibold text-primary mb-4 border p-1 rounded-lg cursor-pointer">
            view all
          </button>
        </div>
        {/* popular job */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ">
          {popularJob.map((popular) => (
            <Popular key={popular._id} popular={popular}></Popular>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-bold mb-5 text-center ">
          All <span className="text-primary">Company</span>
        </h3>
        <div className="flex gap-3 items-center">
          {/* {allCompany.map((company) => (
          <Company key={company._id} company={company}></Company>
        ))} */}
          <Company companies={allCompany} />
        </div>
      </div>
      {/* featured job */}
      <div>
        <div className="flex justify-between items-center p-3">
          <h3 className="text-3xl font-bold mb-5 text-center ">
            Featured <span className="text-primary">job</span>
          </h3>
          <button className=" font-semibold text-primary mb-4 border p-1 rounded-lg cursor-pointer">
            view all
          </button>
        </div>
        <div className="grid  md:grid-cols-3 lg:grid-cols-4 gap-3 ">
          {featureJob.map((feature) => (
            <Feature key={feature._id} feature={feature}></Feature>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
