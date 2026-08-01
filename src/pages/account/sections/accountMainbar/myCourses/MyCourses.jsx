import { Box, Button, Typography } from "@mui/material";
import {
  cardContainer,
  myCoursesContainer,
  myCoursesTabBtn,
  tabConainer,
} from "./myCoursesStyle";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { productData } from "../../../../../data/productData";
import MyCoursesCard from "./MyCoursesCard";
import { useMemo, useState } from "react";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";

const myCoursesTab = [
  "همه دوره ها",
  "تکمیل شده",
  "درحال یادگیری",
  "فقط دوره های پولی",
  "فقط دوره های رایگان",
];

function MyCourses() {
  const [activeTab, setActiveTab] = useState("همه دوره ها");

  const filteredCourses = useMemo(() => {
    switch (activeTab) {
      case "تکمیل شده":
        return productData.slice(0, 3).filter((item) => item?.progress === 100);
      case "درحال یادگیری":
        return productData
          .slice(0, 3)
          .filter((item) => item.progress > 0 && item.progress < 100);
      case "فقط دوره های پولی":
        return productData.slice(0, 3).filter((item) => item.price > 0);
      case "فقط دوره های رایگان":
        return productData.slice(0, 3).filter((item) => item.price === 0);
      case "همه دوره ها":
        return productData.slice(0, 3);
    }
  }, [activeTab]);

  return (
    <>
      <Box sx={myCoursesContainer}>
        <Box sx={tabConainer}>
          <Typography sx={sectionTitle}>دوره های من</Typography>
          <Box sx={flexBox("12px")}>
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
        {filteredCourses.length > 0 ? (
          <Box sx={cardContainer}>
            {filteredCourses?.map((item) => (
              <MyCoursesCard key={item.id} itemData={item} />
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
