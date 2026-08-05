import React, { use, useRef } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import useAxios from "../Hook/useAxios";

const Login = () => {
  const { signInWithGoogle, loginUser, resetPasswordMail } = use(AuthContext);
  const navigate = useNavigate();
  const instance = useAxios();
  const emailRef = useRef();

  const handelLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    loginUser(email, password).then((result) => {
      // console.log(result);
      navigate("/");
    });
  };

  const handelGoogleLogin = () => {
    signInWithGoogle().then((result) => {
      // console.log(result.user);
      navigate("/");
      instance
        .post("/users", {
          displayName: `${result.user?.displayName}`,
          email: `${result.user?.email}`,
          image: `${result.user?.photoURL}`,
        })
        .then((data) => {
          console.log(data);
        });
    });
  };

  const handelResetPassword = () => {
    const email = emailRef.current.value;
    resetPasswordMail(email).then((result) => {
      alert("please check your email");
    });
  };

  return (
    <div
      className="h-screen bg-cover mx-auto items-center flex flex-col justify-center bg-center  text-gray-200 rounded-md"
      style={{ backgroundImage: "url('login.jpg')" }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">Login now!</h1>
      <form
        onSubmit={handelLogin}
        className="fieldset max-w-md mx-auto border backdrop-blur-sm rounded-2xl p-10"
      >
        <label className="">Email</label>
        <input
          type="email"
          className="input text-black"
          placeholder="Email"
          name="email"
          ref={emailRef}
          autoComplete="username"
        />
        <label className="">Password</label>
        <input
          type="password"
          className="input text-black"
          placeholder="Password"
          name="password"
          autoComplete="current-password"
        />
        <div>
          <button onClick={handelResetPassword} className="link link-hover">
            Forgot password?
          </button>
        </div>
        <button className="btn  mt-4">Login</button>
      </form>
      <p>
        don't have an account?{" "}
        <Link className="text-green-300 font-semibold underline" to="/register">
          Register
        </Link>
      </p>
      <button
        onClick={handelGoogleLogin}
        className="btn bg-white text-black border-[#e5e5e5] mt-5"
      >
        <svg
          aria-label="Google logo"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
            <path
              fill="#34a853"
              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
            ></path>
            <path
              fill="#4285f4"
              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
            ></path>
            <path
              fill="#fbbc02"
              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
            ></path>
            <path
              fill="#ea4335"
              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
            ></path>
          </g>
        </svg>
        Login with Google
      </button>
    </div>
  );
};

export default Login;
