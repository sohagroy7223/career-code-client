import React from "react";

const Login = () => {
  return (
    <div
      className="h-[80vh] bg-cover mx-auto items-center flex flex-col justify-center bg-center  text-gray-200 rounded-md"
      style={{ backgroundImage: "url('login.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Login now!</h1>
      <form className="fieldset max-w-md mx-auto border backdrop-blur-xl rounded-2xl p-10">
        <label className="">Email</label>
        <input type="email" className="input text-black" placeholder="Email" />
        <label className="">Password</label>
        <input
          type="password"
          className="input text-black"
          placeholder="Password"
        />
        <div>
          <a className="link link-hover">Forgot password?</a>
        </div>
        <button className="btn  mt-4">Login</button>
      </form>
    </div>
  );
};

export default Login;
