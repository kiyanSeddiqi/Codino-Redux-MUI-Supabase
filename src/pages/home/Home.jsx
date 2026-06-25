import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import Hero from "./sections/Hero/Hero";
import CourseCategory from "./sections/Category/CourseCategory";
import RecentUpdates from "./sections/RecentUpdates/RecentUpdates";
import ExpertCourses from "./sections/Expert/ExpertCourses";
import FreeCourses from "./sections/FreeCourses/FreeCourses";
import BannerSlider from "./sections/Banner/BannerSlider";

function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
      <RecentUpdates />
      <ExpertCourses />
      <FreeCourses />
      <BannerSlider />
    </>
  );
}

export default Home;
