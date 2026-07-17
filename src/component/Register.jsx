import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";

const Register = () => {
  const { createUser } = use(AuthContext);
  const instance = useAxios();

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const image = e.target.image.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(name, image, email, password);

    createUser(email, password).then((result) => {
      // console.log(result);

      instance
        .post("/users", {
          displayName: `${result.user.displayName}`,
          email: `${result.user.email}`,
          image: `${result.user.photoURL}`,
        })
        .then((data) => {
          console.log(data);
        });
    });
  };
  return (
    <div
      className="h-screen bg-cover mx-auto items-center flex flex-col justify-center bg-center  text-gray-200 rounded-md"
      style={{ backgroundImage: "url('login.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Register now!</h1>
      <form
        onSubmit={handelRegister}
        className="fieldset max-w-md mx-auto border backdrop-blur-sm rounded-2xl p-10"
      >
        <label className="">Name</label>
        <input
          type="text"
          className="input text-black"
          placeholder="Your Name"
          name="name"
          autoComplete="username"
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
          autoComplete="email"
          required
        />
        <label className="">Password</label>
        <input
          type="password"
          className="input text-black"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
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
