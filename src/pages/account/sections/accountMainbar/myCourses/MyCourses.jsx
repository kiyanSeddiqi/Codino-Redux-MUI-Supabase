import { Box, Button, Typography } from "@mui/material";
import {
  cardContainer,
  myCoursesContainer,
  myCoursesTabBtn,
  tabContainer,
} from "./myCoursesStyle";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { productData } from "../../../../../data/productData";
import MyCoursesCard from "./MyCoursesCard";
import { use, useMemo, useState } from "react";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import useMyCourses from "../../../../../features/product/hooks/useMyCourses";
import MyCoursesCardSkeleton from "./MyCoursesCardSkeleton";

const myCoursesTab = [
  "همه دوره ها",
  "تکمیل شده",
  "درحال یادگیری",
  "فقط دوره های پولی",
  "فقط دوره های رایگان",
];

function MyCourses() {
  const { courses, loading, updateCardProgress } = useMyCourses();

  const [activeTab, setActiveTab] = useState("همه دوره ها");
  const filteredCourses = useMemo(() => {
    switch (activeTab) {
      case "تکمیل شده":
        return courses.filter((item) => item?.progress === 100);
      case "درحال یادگیری":
        return courses.filter(
          (item) => item.progress > 0 && item.progress < 100,
        );
      case "فقط دوره های پولی":
        return courses.filter((item) => item.price > 0);
      case "فقط دوره های رایگان":
        return courses.filter((item) => item.price === 0);
      case "همه دوره ها":
        return courses;
    }
  }, [activeTab, courses]);

  return (
    <>
      <Box sx={myCoursesContainer}>
        <Box sx={{ ...flexBox({ xs: 2, lg: 4 }), flexWrap: "wrap" }}>
          <Typography sx={{ ...sectionTitle, flexShrink: 0 }}>
            دوره های من
          </Typography>
          <Box sx={tabContainer}>
            {myCoursesTab.map((tab) => (
              <Button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variant={activeTab === tab ? "contained" : "outlined"}
                sx={myCoursesTabBtn}
              >
                {tab}
              </Button>
            ))}
          </Box>
        </Box>
        {loading ? (
          <Box sx={cardContainer}>
            {Array.from({ length: 3 }).map((_, index) => (
              <MyCoursesCardSkeleton key={index} />
            ))}
          </Box>
        ) : filteredCourses.length > 0 ? (
          <Box sx={cardContainer}>
            {filteredCourses?.map((item) => (
              <MyCoursesCard
                key={item.id}
                itemData={item}
                onProgressUpdate={updateCardProgress}
              />
            ))}
          </Box>
        ) : (
          <Box sx={{ ...flexCol(2.5), my: 12, alignItems: "center" }}>
            <SvgIcon name="notFound" size={150} />
            <Typography sx={{ fontWeight: 600 }}>
              موردی برای نمایش وجود ندارد!
            </Typography>
            <Typography variant="subtitle2">
              درحال حاضر هیچ دوره ای برای نمایش نیست...
            </Typography>
          </Box>
        )}
      </Box>
    </>
  );
}

export default MyCourses;
