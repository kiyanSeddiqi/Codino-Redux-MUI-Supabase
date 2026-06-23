import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon";
import Hero from "./sections/Hero/Hero";
import CourseCategory from "./sections/Category/CourseCategory";

function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
    </>
  );
}

export default Home;
