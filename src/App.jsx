import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/home/Home";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import getTheme from "./theme/theme";
import { useSelector } from "react-redux";
import CourseDetails from "./pages/courseDetails/CourseDetails";
import Courses from "./pages/courses/Courses";
import ResetPasswordPage from "./pages/resetPassword/ResetPasswordPage";
import AccountPage from "./pages/account/AccountPage";
import FullWidthLayout from "./components/layout/FullWidthLayout";

const router = createBrowserRouter([
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
            // element:
          },
        ],
      },
    ],
  },
]);

function App() {
  const mode = useSelector((state) => state.theme.mode);
  const theme = useMemo(() => getTheme(mode), [mode]);

  useEffect(() => {
    localStorage.setItem("app-theme", mode);
  }, [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
