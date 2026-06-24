import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import Hero from "./sections/Hero/Hero";
import CourseCategory from "./sections/Category/CourseCategory";
import RecentUpdates from "./sections/RecentUpdates/RecentUpdates";

function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
      <RecentUpdates />
    </>
  );
}

export default Home;
