import { Box, Tab, Tabs } from "@mui/material";
import { tabContainer, tabsComponent } from "./courseTabStyles";
import { useState } from "react";

const tabs = [
  {
    label: "سرفصل‌ های دوره",
    id: "chapter",
  },
  {
    label: "محتوای دوره",
    id: "content",
  },
  {
    label: "سوالات متداول",
    id: "faq",
  },
  {
    label: "پیش نیازها",
    id: "prerequisites",
  },
  {
    label: "دیدگاه کاربران",
    id: "comments",
  },
  {
    label: "مدرس",
    id: "teacher",
  },
];

function CourseTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);

    const element = document.getElementById(tabs[newValue].id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 150;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <Box sx={tabContainer}>
        <Tabs sx={tabsComponent} value={activeTab} onChange={handleChange}>
          {tabs.map((tab) => (
            <Tab label={tab.label} key={tab.id} disableRipple />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default CourseTabs;
