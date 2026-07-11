import { Box } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import {
  courseContainer,
  courseContentBox,
  courseSidbarBox,
} from "./courseDetailStyles";
import CourseHeader from "./Sections/Header/CourseHeader";
import BreadCrumb from "./Sections/Header/BreadCrumb";
import CourseTabs from "./Sections/Tabs/CourseTabs";
import CourseChapterSection from "./Sections/Chapters/CourseChapterSection";
import CourseContentSection from "./Sections/Content/CourseContentSection";
import CourseFaqSection from "./Sections/Faq/CourseFaqSection";
import CoursePrerequisiteSection from "./Sections/Prerequisites/CoursePrerequisiteSection";
import CourseCommentSection from "./Sections/Comments/CourseCommentSection";
import CourseTeacherSection from "./Sections/Teacher/CourseTeacherSection";
import CourseSidebar from "./Sections/Sidebar/CourseSidebar";
import RelatedCourses from "./Sections/RelatedCourses/RelatedCourses";
import { useParams } from "react-router-dom";
import { productData } from "../../data/productData";
import { categoriesData } from "../../data/categories";

function CourseDetails() {
  const { slug } = useParams();
  const product = productData.find((item) => item?.slug === slug);
  const courseMainCategory = categoriesData.find(
    (item) => item?.category === product?.categories[0],
  );
  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb
          items={[
            { title: "دوره ها", link: "/courses" },
            {
              title: courseMainCategory.title,
              link: `/courses/${courseMainCategory.category}`,
            },
            { title: product.title },
          ]}
        />
        <Box sx={courseContentBox}>
          <Box
            sx={{
              ...flexCol("40px"),
              flex: 1,
              minWidth: 0,
            }}
          >
            <CourseHeader product={product} />
            <CourseTabs />
            <CourseChapterSection currentProductId={product.id} />
            <CourseContentSection />
            <CourseFaqSection />
            <CoursePrerequisiteSection />
            <CourseCommentSection product={product} />
            <CourseTeacherSection product={product} />
          </Box>
          <Box component="aside" sx={courseSidbarBox}>
            <CourseSidebar product={product} />
          </Box>
        </Box>
        <RelatedCourses
          sameCategory={product.categories}
          currentProductId={product.id}
        />
      </Box>
    </>
  );
}

export default CourseDetails;
