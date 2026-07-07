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
import CourseTeacherSection from "./Sections/Teacher/CourseTeacherSection";
import CourseSidebar from "./Sections/Sidebar/CourseSidebar";
import RelatedCourses from "./Sections/RelatedCourses/RelatedCourses";

function CourseDetails() {
  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb />
        <Box sx={courseContentBox}>
          <Box sx={{ ...flexCol("40px"), flex: 1, flexShrink: 0 }}>
            <CourseHeader />
            <CourseTabs />
            <CourseChapterSection />
            <CourseContentSection />
            <CourseFaqSection />
            <CoursePrerequisiteSection />
            <CourseCommentSection />
            <CourseTeacherSection />
          </Box>
          <Box component="aside" sx={{ width: { xs: "100%", lg: "25%" } }}>
            <CourseSidebar />
          </Box>
        </Box>
        <RelatedCourses />
      </Box>
    </>
  );
}

export default CourseDetails;
