import React from "react";
import Dashboard from "../page/dashboard";
import ChangePassword from "../page/auth/ChangePassword";
import Root from "../page/root";
import PageNotFound from "../page/404";
import UnVerifiedEmail from "../page/Unverified";
import { TeacherStateProvider } from "../globalstate/TeacherContext";
import ErrorPage from "../page/error";
import CreateQuizSteps from "../page/dashboard/CreateQuizSteps";
import CreateQuizProvider from "../context/CreateQuiz";

export const PrivateRoute = [
  {
    path: "/dashboard",
    element: (
      <TeacherStateProvider>
        <Dashboard />
      </TeacherStateProvider>
    ),
  },
  {
    path: "/create-quiz",
    element: (
      <CreateQuizProvider>
        <CreateQuizSteps />
      </CreateQuizProvider>
    ),
  },
  {
    path: "unverified-email",
    element: <UnVerifiedEmail />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];

export const PublicRoute = [
  {
    path: "/changepassword/:token",
    element: <ChangePassword />,
    children: [
      {
        path: ":token",
      },
    ],
  },
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
];
