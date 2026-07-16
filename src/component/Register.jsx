import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div
      className="h-screen bg-cover mx-auto items-center flex flex-col justify-center bg-center  text-gray-200 rounded-md"
      style={{ backgroundImage: "url('login.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Register now!</h1>
      <form className="fieldset max-w-md mx-auto border backdrop-blur-sm rounded-2xl p-10">
        <label className="">Name</label>
        <input
          type="text"
          className="input text-black"
          placeholder="Your Name"
          name="name"
          required
        />
        <label className="">Photo URL</label>
        <input
          type="text"
          className="input text-black"
          placeholder="Your Photo URL"
          name="image"
          required
        />
        <label className="">Email</label>
        <input
          type="email"
          className="input text-black"
          placeholder="Email"
          name="email"
          required
        />
        <label className="">Password</label>
        <input
          type="password"
          className="input text-black"
          placeholder="Password"
          name="password"
          required
        />

        <button className="btn  mt-4">create Account</button>
      </form>
      <p className="flex items-center gap-1">
        Already have an account
        <Link className="text-green-300 font-semibold underline" to="/login">
          login
        </Link>
      </p>
    </div>
  );
};

export default Register;
