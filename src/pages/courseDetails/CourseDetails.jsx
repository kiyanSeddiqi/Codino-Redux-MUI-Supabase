import { Box } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { courseContainer, courseContentBox } from "./courseDetailStyles";
import CourseHeader from "./Sections/Header/CourseHeader";
import BreadCrumb from "./Sections/Header/BreadCrumb";
import CourseTabs from "./Sections/Tabs/CourseTabs";
import CourseOutlines from "./Sections/Outlines/CourseOutlines";

function CourseDetails() {
  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb />
        <Box sx={courseContentBox}>
          <Box component="section" sx={{ ...flexCol("40px"), flex: "70%" }}>
            <CourseHeader />
            <CourseTabs />
            <CourseOutlines />
          </Box>
          <Box component="aside" sx={{ width: "30%" }}></Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetails;
