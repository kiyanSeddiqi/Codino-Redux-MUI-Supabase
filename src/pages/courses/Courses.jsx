import { Box, Typography } from "@mui/material";
import { courseCategoryCardTitle, coursesContainer } from "./coursesStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import CategorySilder from "./Sections/CategorySlider/CategorySilder";
import Faq from "../home/Sections/FAQ/Faq";
import CoursesFilter from "./Sections/Filter/CoursesFilter";
import { useParams } from "react-router-dom";
import { categoryData } from "../../data/categoryData";

function Courses() {
  const { slug } = useParams();
  const mainCategory = categoryData.find((item) => item.slug === slug);

  const breadcrumbItems = [
    { title: "دوره ها", link: slug ? "/courses" : undefined },
  ];
  if (slug) {
    breadcrumbItems.push({ title: mainCategory?.title });
  }
  return (
    <>
      <Box sx={coursesContainer}>
        <BreadCrumb items={breadcrumbItems} />
        <CategorySilder />
        <CoursesFilter />
        <Faq />
      </Box>
    </>
  );
}

export default Courses;
