import React, { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/careerCode.png";

const Navbar = () => {
  const { user, signOutUser, setLoading } = use(AuthContext);
  const navigate = useNavigate();
  // console.log(user.accessToken);

  const handelSignOut = () => {
    signOutUser().then(() => {
      alert("sign out user successfully");
      navigate("/login");
    });
  };

  // console.log(user);
  const link = (
    <>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
          }
          to="allJobs"
        >
          All Jobs
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
              }
              to="favoriteJob"
            >
              Favorite Job
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
              }
              to="myApplication"
            >
              Applied Jobs
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
              }
              to="postJob"
            >
              Post Job
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "mr-4 font-bold text-blue-500 underline" : "mr-4"
              }
              to="postedJob"
            >
              My Posted Jobs
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar backdrop-blur-sm shadow-sm ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <img className="w-26" src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 z-50">{link}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <button
            onClick={handelSignOut}
            className="btn text-gray-100 bg-primary"
          >
            <Link to="/">LogOut</Link>
          </button>
        ) : (
          <button className="btn text-gray-100 bg-primary">
            <Link to="/login">Login</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
