import { Box } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { courseContainer, courseContentBox } from "./courseDetailStyles";
import CourseHeader from "./Sections/Header/CourseHeader";
import BreadCrumb from "./Sections/Header/BreadCrumb";
import CourseTabs from "./Sections/Tabs/CourseTabs";
import CourseChapterSection from "./Sections/Chapters/CourseChapterSection";
import CourseContentSection from "./Sections/Content/CourseContentSection";
import CourseFaqSection from "./Sections/Faq/CourseFaqSection";
import CoursePrerequisiteSection from "./Sections/Prerequisites/CoursePrerequisiteSection";
import CourseCommentSection from "./Sections/Comments/CourseCommentSection";

function CourseDetails() {
  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb />
        <Box sx={courseContentBox}>
          <Box sx={{ ...flexCol("40px"), flex: "70%" }}>
            <CourseHeader />
            <CourseTabs />
            <CourseChapterSection />
            <CourseContentSection />
            <CourseFaqSection />
            <CoursePrerequisiteSection />
            <CourseCommentSection />
          </Box>
          <Box component="aside" sx={{ width: "30%" }}></Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetails;
