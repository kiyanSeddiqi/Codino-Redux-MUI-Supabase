import MainLayout from "../components/layout/MainLayout";
import Home from "../pages/home/Home";
import { createBrowserRouter } from "react-router-dom";
import PageNotFound from "../pages/PageNotFound";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import Courses from "../pages/courses/Courses";
import ResetPasswordPage from "../pages/resetPassword/ResetPasswordPage";
import FullWidthLayout from "../components/layout/FullWidthLayout";
import AccountPage from "../pages/account/AccountPage";
import MyCourses from "../pages/account/sections/accountMainbar/myCourses/MyCourses";
import Dashboard from "../pages/account/sections/accountMainbar/dashboard/Dashboard";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/course/:slug",
        element: <CourseDetails />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/courses/:slug",
        element: <Courses />,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPasswordPage />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
  {
    element: <FullWidthLayout />,
    children: [
      {
        path: "/account",
        element: <AccountPage />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: "my-courses",
            element: <MyCourses />,
          },
        ],
      },
    ],
  },
]);
