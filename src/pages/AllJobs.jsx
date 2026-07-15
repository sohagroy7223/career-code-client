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
      <div className="px-2 space-y-3 text-center">
        <h3 className="text-3xl font-bold">All Jobs</h3>
        <p>
          Explore thousands of job opportunities and find the perfect fit for
          you
        </p>
        <div>
          <div className="md:flex justify-between gap-10 md:space-y-0 space-y-3 items-center relative ">
            <h3 className="text-2xl font-bold">
              Total Jobs: <span className="text-primary">{allJobs.length}</span>
            </h3>
            <input
              className="p-1.5  border-primary rounded-sm"
              type="text"
              placeholder="search your job by title"
            />

            <div>
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
