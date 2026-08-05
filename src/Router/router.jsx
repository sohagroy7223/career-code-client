import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";

import AddJob from "../pages/AddJob";
import PostJob from "../pages/PostJob";
import Error404 from "../UI/Error404";
import Login from "../component/Login";
import Register from "../component/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import JobDetails from "../component/JobDetails";
import FavoriteJobs from "../component/FavoriteJobs";
import Form from "../component/Form";
import MyApplication from "../component/MyApplication";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path: "/jobsDetails/:id",
        loader: ({ params }) =>
          fetch(`https://career-code-server-2.onrender.com/jobs/${params.id}`),
        element: (
          <PrivateRoute>
            <JobDetails></JobDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/favoriteJob",
        element: (
          <PrivateRoute>
            <FavoriteJobs></FavoriteJobs>
          </PrivateRoute>
        ),
      },
      {
        path: "/postJob",
        element: (
          <PrivateRoute>
            <AddJob></AddJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/postedJob",
        element: (
          <PrivateRoute>
            <PostJob></PostJob>
          </PrivateRoute>
        ),
      },
      {
        path: "/myApplication",
        element: (
          <PrivateRoute>
            <MyApplication></MyApplication>
          </PrivateRoute>
        ),
      },
      {
        path: "/application/:id",
        element: (
          <PrivateRoute>
            <Form></Form>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
