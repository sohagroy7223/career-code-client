import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";
import Swal from "sweetalert2";

const AddJob = () => {
  const { user } = use(AuthContext);
  const instance = useAxios();

  const handelAddJob = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const company = e.target.company.value;
    const category = e.target.category.value;
    const type = e.target.type.value;
    const max = e.target.maxSalary.value;
    const min = e.target.minSalary.value;
    const salary = `${min}-${max}`;
    const experience = e.target.experience.value;
    const workPlace = e.target.workPlace.value;
    const company_logo = e.target.company_logo.value;
    const location = e.target.location.value;
    const description = e.target.description.value;
    const responsibilities = e.target.responsibilities.value.split(",");
    const requirements = e.target.requirements.value.split(",");
    const job = {
      title: title,
      company: company,
      category: category,
      jobType: type,
      salary: salary,
      experience: experience,
      workplace: workPlace,
      company_log: company_logo,
      location: location,
      description: description,
      responsibilities: responsibilities,
      requirements: requirements,
      applicationDeadline: new Date().toDateString(),
      email: user.email,
    };
    // console.log(job);
    instance.post("/jobs", job).then((res) => {
      // console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your post has job been publish",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div>
      <div className="p-2">
        <h3 className="text-xl font-bold">Post A Job</h3>
        <p>And Manage your all post jobs</p>
      </div>

      <form onSubmit={handelAddJob}>
        <div className="md:flex gap-5 w-full px-3 mt-8">
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                required
                className="input w-full"
                placeholder="Enter your Job Title"
              />
            </fieldset>
          </div>
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Company Name</label>
              <input
                type="text"
                name="company"
                required
                className="input w-full"
                placeholder="Enter Company Name"
              />
            </fieldset>
          </div>
        </div>
        <div className="md:flex gap-5 w-full px-3">
          <div className="md:w-6/12">
            <label className="label">Job Category</label>
            <select
              defaultValue="Pick a text editor"
              name="category"
              required
              className="select select-primary w-full border-gray-300"
            >
              <option disabled={true}>Select category</option>
              <option>Frontend Developer</option>
              <option> Backend Developer</option>
              <option>Full-Stack Developer</option>
              <option>Mobile Developer</option>
              <option>DevOps Engineer</option>
            </select>
          </div>
          <div className="md:w-6/12">
            <label className="label">Job Type</label>

            <select
              defaultValue="Pick a text editor"
              name="type"
              required
              className="select select-primary w-full border border-gray-300"
            >
              <option disabled={true}>Select category</option>
              <option>Full time</option>
              <option>Part Time</option>
              <option>Internship</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-5 w-full px-3">
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Experience Required</label>
              <input
                type="text"
                name="experience"
                required
                className="input w-full"
                placeholder="ex- 2 years "
              />
            </fieldset>
          </div>
          <div className="md:w-6/12">
            <label className="label">Workplace</label>

            <select
              defaultValue="Pick a text editor"
              name="workPlace"
              required
              className="select select-primary w-full border border-gray-300"
            >
              <option disabled={true}>Select category</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>On-site</option>
            </select>
          </div>
        </div>
        <div className="md:flex gap-5 w-full px-3">
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Responsibilities</label>
              <input
                type="text"
                name="responsibilities"
                required
                className="input w-full"
                placeholder="Build UI, Fix bugs, Write tests"
              />
            </fieldset>
          </div>
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Requirements</label>
              <input
                type="text"
                name="requirements"
                required
                className="input w-full"
                placeholder="React, JavaScript, Tailwind CSS, Git"
              />
            </fieldset>
          </div>
        </div>
        <div className="md:flex gap-5 w-full px-3">
          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Salary</label>
              <div className="flex gap-3">
                <input
                  type="number"
                  name="maxSalary"
                  required
                  className="input w-full"
                  placeholder="Max Salary"
                />
                <input
                  type="number"
                  id="name"
                  name="minSalary"
                  required
                  className="input w-full"
                  placeholder="Min Salary"
                />
              </div>
            </fieldset>
          </div>

          <div className="md:w-6/12">
            <fieldset className="fieldset">
              <label className="label">Company Logo</label>
              <input
                type="text"
                name="company_logo"
                required
                className="input w-full"
                placeholder="your company logo"
              />
            </fieldset>
          </div>
        </div>

        <div className="md:w-full">
          <fieldset className="fieldset">
            <label className="label">Location</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="enter your Location"
            />
          </fieldset>
        </div>
        <div className="px-3 mt-5 border-gray-300">
          <label className="label">Description</label>
          <textarea
            className="w-full p-2"
            name="description"
            required
            placeholder="add short description"
          ></textarea>
        </div>
        <div className="flex justify-center ">
          <button className="btn bg-primary text-gray-100">Post Job</button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
