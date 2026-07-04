import { Box, Typography } from "@mui/material";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import Hero from "./Sections/Hero/Hero";
import CourseCategory from "./Sections/Category/CourseCategory";
import RecentUpdates from "./Sections/RecentUpdates/RecentUpdates";
import ExpertCourses from "./Sections/Expert/ExpertCourses";
import BannerSlider from "./Sections/Banner/BannerSlider";
import DailySuggest from "./Sections/DailySuggest/DailySuggest";
import WhyChooseUs from "./Sections/WhyChooseUs/WhyChooseUs";
import BestSellers from "./Sections/BestSellers/BestSellers";
import RoadMap from "./Sections/Roadmap/RoadMap";
import MentorQuote from "./Sections/MentorGuidance/MentorQuote";
import CodinoPlus from "./Sections/CodinoPlus/CodinoPlus";
import Blog from "./Sections/Blog/Blog";
import Faq from "./Sections/FAQ/Faq";

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
      <Blog />
      <Faq />
    </>
  );
}

export default Home;
