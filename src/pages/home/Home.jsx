import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import Hero from "./sections/Hero/Hero";
import CourseCategory from "./sections/Category/CourseCategory";
import RecentUpdates from "./sections/RecentUpdates/RecentUpdates";
import ExpertCourses from "./sections/Expert/ExpertCourses";
import BannerSlider from "./sections/Banner/BannerSlider";
import DailySuggest from "./sections/DailySuggest/DailySuggest";
import WhyChooseUs from "./sections/WhyChooseUs/WhyChooseUs";
import BestSellers from "./sections/BestSellers/BestSellers";
import RoadMap from "./sections/Roadmap/RoadMap";
import MentorQuote from "./sections/MentorGuidance/MentorQuote";
import CodinoPlus from "./sections/CodinoPlus/CodinoPlus";

function Home() {
  return (
    <>
      <Hero />
      <CourseCategory />
      <RecentUpdates />
      <ExpertCourses />
      <DailySuggest />
      <BannerSlider />
      <WhyChooseUs />
      <BestSellers />
      <RoadMap />
      <MentorQuote />
      <CodinoPlus />
    </>
  );
}

export default Home;
