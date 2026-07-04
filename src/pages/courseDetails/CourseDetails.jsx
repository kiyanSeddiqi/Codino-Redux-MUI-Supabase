import { Box, Tab, Tabs } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { courseContainer, courseContentBox } from "./courseDetailStyles";
import CourseHeader from "./Sections/Header/CourseHeader";
import BreadCrumb from "./Sections/Header/BreadCrumb";
import { TabContainer } from "./Sections/Tabs/courseTabStyles";
import { useState } from "react";

const sections = [
  "curriculum",
  "content",
  "faq",
  "prerequisites",
  "comments",
  "teacher",
];
function CourseDetails() {
  const [activeTab, setActiveTab] = useState("");
  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    document.getElementById(sections[newValue])?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Box sx={courseContainer}>
        <BreadCrumb />
        <Box sx={courseContentBox}>
          <Box component="main" sx={{ ...flexCol("40px"), flex: 1 }}>
            <CourseHeader />
            <Box sx={TabContainer}>
              <Tabs value={activeTab} onChange={handleChange}>
                <Tab label="سرفصل‌ها" />
                <Tab label="سوالات متداول" />
                <Tab label="پیش نیازها" />
                <Tab label="دیدگاه کاربران" />
                <Tab label="مدرس" />
              </Tabs>
            </Box>
          </Box>
          <Box component="aside" sx={{ width: "25%" }}></Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseDetails;
