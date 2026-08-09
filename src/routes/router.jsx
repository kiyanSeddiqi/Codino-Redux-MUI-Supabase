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
import Installments from "../pages/account/sections/accountMainbar/installments/Installments";
import Wallet from "../pages/account/sections/accountMainbar/wallet/Wallet";
import EditProfile from "../pages/account/sections/accountMainbar/editProfile/EditProfile";
import ChangePassword from "../pages/account/sections/accountMainbar/changePassword/ChangePassword";
import Consultations from "../pages/account/sections/accountMainbar/consultations/Consultations";
import Ticket from "../pages/account/sections/accountMainbar/ticket/Ticket";
import MyFactors from "../pages/account/sections/accountMainbar/myFactors/MyFactors";
import FavoriteCourses from "../pages/account/sections/accountMainbar/favoriteCourses/FavoriteCourses";
import Referral from "../pages/account/sections/accountMainbar/referral/Referral";
import GoogleCallback from "../pages/googleCallback/GoogelCallback";

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
    path: "/auth/google-callback",
    element: <GoogleCallback />,
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
          {
            path: "installments",
            element: <Installments />,
          },
          {
            path: "wallet",
            element: <Wallet />,
          },
          {
            path: "edit-profile",
            element: <EditProfile />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
          {
            path: "consultations",
            element: <Consultations />,
          },
          {
            path: "tickets",
            element: <Ticket />,
          },
          {
            path: "my-factors",
            element: <MyFactors />,
          },
          {
            path: "favorite-courses",
            element: <FavoriteCourses />,
          },
          {
            path: "referral",
            element: <Referral />,
          },
        ],
      },
    ],
  },
]);
