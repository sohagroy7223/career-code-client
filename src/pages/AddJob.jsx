import React from "react";

const AddJob = () => {
  return (
    <div>
      <h3 className="text-2xl text-center font-bold px-3">
        add <span className="text-primary">job</span>{" "}
      </h3>
      <div className="flex gap-5 w-full px-3 mt-8">
        <div className="w-6/12">
          <fieldset className="fieldset">
            <label className="label">Job Title</label>
            <input
              type="text"
              id="name"
              className="input w-full"
              placeholder="Enter your Job Title"
            />
          </fieldset>
        </div>
        <div className="w-6/12">
          <fieldset className="fieldset">
            <label className="label">Company Name</label>
            <input
              type="text"
              id="name"
              className="input w-full"
              placeholder="Enter Company Name"
            />
          </fieldset>
        </div>
      </div>
      <div className="flex gap-5 w-full px-3">
        <div className="w-6/12">
          <label className="label">Job Category</label>
          <select
            defaultValue="Pick a text editor"
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
        <div className="w-6/12">
          <label className="label">Job Type</label>
          <select
            defaultValue="Pick a text editor"
            className="select select-primary w-full border border-gray-300"
          >
            <option disabled={true}>Select category</option>
            <option>Full time</option>
            <option>Part Time</option>
            <option>Remote</option>
            <option>Office</option>
          </select>
        </div>
      </div>
      <div className="flex gap-5 w-full px-3">
        <div className="w-6/12">
          <fieldset className="fieldset">
            <label className="label">Salary</label>
            <div className="flex gap-3">
              <input
                type="number"
                id="name"
                className="input w-full"
                placeholder="Max Salary"
              />
              <input
                type="number"
                id="name"
                className="input w-full"
                placeholder="Min Salary"
              />
            </div>
          </fieldset>
        </div>
        <div className="w-6/12">
          <fieldset className="fieldset">
            <label className="label">Location</label>
            <input
              type="text"
              id="name"
              className="input w-full"
              placeholder="enter your Location"
            />
          </fieldset>
        </div>
      </div>
      <div className="px-3 mt-5 border-gray-300">
        <textarea name="" className="w-full" id=""></textarea>
      </div>
    </div>
  );
};

export default AddJob;
