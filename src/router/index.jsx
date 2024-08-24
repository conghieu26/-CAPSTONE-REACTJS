import * as React from "react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { UserTemplate } from "../atomic/templates/user/user.template";

const Home = lazy(() => import("../atomic/pages/home/index"));
const Contact = lazy(() => import("../atomic/pages/contact/index"));
const News = lazy(() => import("../atomic/news/index"));
const Register = lazy(() => import("../atomic/pages/Register/index"));
const Login = lazy(() => import("../atomic/pages/Login/index"));

export const router = createBrowserRouter([
  {
    path: "",
    element: <UserTemplate></UserTemplate>,
    children: [
      {
        path: "home",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "news",
        element: (
          <Suspense fallback={<>Loading...</>}>
            <News />
          </Suspense>
        ),
      },
    ],
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
]);
