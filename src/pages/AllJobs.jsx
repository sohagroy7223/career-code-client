import { useEffect, useState } from "react";
import useAxios from "../Hook/useAxios";
import Jobs from "../component/Jobs";
import { button } from "framer-motion/client";

const AllJobs = () => {
  const [allJobs, setAllJobs] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const limit = 6;

  const instance = useAxios();

  useEffect(() => {
    instance
      .get(`/jobs?limit=${limit}&skip=${currentPage * limit}&search=${search}`)
      .then((res) => {
        setJobs(res.data.Jobs);
        setAllJobs(res.data.total);
        const page = Math.ceil(res.data.total / limit);
        setTotalPage(page);
      });
  }, [currentPage, search]);

  const handelSearch = (e) => {
    setSearch(e.target.value);
  };

  // console.log(totalPage);
  return (
    <div className="px-3 space-y-5">
      <>
        <div className="px-2 space-y-3 text-center">
          <h3 className="text-3xl font-bold">All Jobs</h3>
          <p>
            Explore thousands of job opportunities and find the perfect fit for
            you
          </p>
          <div>
            <div className="md:flex justify-between gap-10 md:space-y-0 space-y-3 items-center relative ">
              <h3 className="text-2xl font-bold">
                Total Jobs: <span className="text-primary">{allJobs}</span>
              </h3>
              <input
                className="p-1.5  border-primary rounded-sm"
                type="text"
                onChange={handelSearch}
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
        {jobs.map((jobs) => (
          <Jobs key={jobs._id} jobs={jobs}></Jobs>
        ))}
      </>
      <div className=" flex flex-row gap-3 justify-center flex-wrap">
        {[...Array(totalPage).keys()].map((i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`btn ${i === currentPage && "btn-primary"}`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllJobs;
