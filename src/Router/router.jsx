import React from "react";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../Layout/Root";
import Home from "../pages/Home";
import AllJobs from "../pages/AllJobs";
import MyApplication from "../pages/MyApplication";
import AddJob from "../pages/AddJob";
import PostJob from "../pages/PostJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: "/myApplication",
        element: <MyApplication></MyApplication>,
      },
      {
        path: "/addJob",
        element: <AddJob></AddJob>,
      },
      {
        path: "postJob",
        element: <PostJob></PostJob>,
      },
    ],
  },
]);

export default router;
