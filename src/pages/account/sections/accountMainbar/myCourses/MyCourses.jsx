import { Box, Button, Typography } from "@mui/material";
import {
  cardContainer,
  myCoursesContainer,
  myCoursesTabBtn,
  tabConainer,
} from "./myCoursesStyle";
import { flexBox, sectionTitle } from "../../../../../styles/globalStyles";
import { productData } from "../../../../../data/productData";
import MyCoursesCard from "./MyCoursesCard";

const myCoursesTab = [
  "همه دوره ها",
  "تکمیل شده",
  "درحال یادگیری",
  "فقط دوره های پولی",
  "فقط دوره های رایگان",
];

function MyCourses() {
  return (
    <>
      <Box sx={myCoursesContainer}>
        <Box sx={tabConainer}>
          <Typography sx={sectionTitle}>دوره های من</Typography>
          <Box sx={flexBox("12px")}>
            {myCoursesTab.map((tab) => (
              <Button variant="outlined" sx={myCoursesTabBtn}>
                {tab}
              </Button>
            ))}
          </Box>
        </Box>
        <Box sx={cardContainer}>
          {productData.slice(0, 3).map((item) => (
            <MyCoursesCard key={item.id} itemData={item} />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default MyCourses;
