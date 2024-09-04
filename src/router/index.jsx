import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { UserTemplate } from "../atomic/templates/user/index";

const Home = lazy(() => import("../atomic/pages/home/index"));
const Register = lazy(() => import("../atomic/pages/register/index"));
const Login = lazy(() => import("../atomic/pages/login/index"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <UserTemplate></UserTemplate>,
  },
  {
    path: "register",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Register />,
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Login />,
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <Navigate to="" replace></Navigate>,
  },
]);
