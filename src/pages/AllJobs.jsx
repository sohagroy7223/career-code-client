import { useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import Jobs from "../component/Jobs";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState([]);
  const instance = useAxios();

  useEffect(() => {
    instance.get("/jobs").then((res) => {
      // console.log(res.data);
      setAllJobs(res.data);
    });
  }, []);
  // console.log(allJobs);
  return (
    <div className="px-3 space-y-5">
      <div className="px-3 space-y-3">
        <h3 className="text-3xl font-bold">All Jobs</h3>
        <p>
          Explore thousands of job opportunities and find the perfect fit for
          you
        </p>
        <div>
          <div className="md:flex gap-10 md:space-y-0 space-y-3 items-center relative ">
            <input
              className="p-1.5 md:w-100 lg:w-140 border-primary rounded-sm"
              type="text"
              placeholder="search your job by title"
            />
            <button className=" items-center absolute lg:ml-125 md:ml-87 -ml-5 bg-primary text-white p-2 rounded-full cursor-pointer">
              Search
            </button>
            <select className="select select-primary">
              <option defaultValue={"select category"} disabled={true}>
                select category
              </option>
              <option>Web Development</option>
              <option> Design</option>
              <option>Mobile developer</option>
              <option>DevOps</option>
              <option>data science</option>
              <option>Cyber security</option>
              <option>Other</option>
            </select>
            <div>
              <select className="select select-primary">
                <option disabled={true}>jobType</option>
                <option>Part time</option>
                <option>Full Time fork</option>
                <option>Remote</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      {allJobs.map((jobs) => (
        <Jobs key={jobs._id} jobs={jobs}></Jobs>
      ))}
    </div>
  );
};

export default AllJobs;
