import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import DetailMovie from "../atomic/components/detailMovie/index";
import { UserTemplate } from "../atomic/templates/user/user.template/index";

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
        <Register />
      </Suspense>
    ),
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<>Loading...</>}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/movie/:id",
    element: <DetailMovie />,
  },
  {
    path: "*",
    element: <Navigate to="" replace></Navigate>,
  },
]);
