import { Box, Tab, Tabs } from "@mui/material";
import { tabContainer, tabsComponent } from "./courseTabStyles";
import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const location = useLocation();

  const isScrolling = useRef(false);
  const SCROLL_OFFSET = 150;

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
    navigate(
      {
        pathname: location.pathname,
        hash: tabs[newValue].id,
      },
      {
        replace: true,
      },
    );
    isScrolling.current = true;
    const element = document.getElementById(tabs[newValue].id);
    if (element) {
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        SCROLL_OFFSET;
      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrolling.current) return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = tabs.findIndex((tab) => tab.id === entry.target.id);

          if (index !== -1) {
            setActiveTab(index);
          }
        });
      },
      {
        rootMargin: "-150px 0px -50% 0px",
        threshold: 0,
      },
    );

    tabs.forEach((tab) => {
      const section = document.getElementById(tab.id);
      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Box sx={tabContainer}>
        <Tabs
          sx={tabsComponent}
          value={activeTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
        >
          {tabs.map((tab) => (
            <Tab label={tab.label} key={tab.id} disableRipple />
          ))}
        </Tabs>
      </Box>
    </>
  );
}

export default CourseTabs;
