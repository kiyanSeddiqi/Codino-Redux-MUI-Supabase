import { Box, Typography } from "@mui/material";
import { courseCategoryCardTitle, coursesContainer } from "./coursesStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import CategorySilder from "./Sections/CategorySlider/CategorySilder";
import Faq from "../home/Sections/FAQ/Faq";
import CoursesFilter from "./Sections/Filter/CoursesFilter";

function Courses() {
  return (
    <>
      <Box sx={coursesContainer}>
        <BreadCrumb items={[{ title: "دوره ها" }]} />
        <CategorySilder />
        <CoursesFilter />
        <Faq />
      </Box>
    </>
  );
}

export default Courses;
