import { Box, Button, Typography } from "@mui/material";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import { myCoursesTabBtn } from "../myCourses/myCoursesStyle";
import { useState } from "react";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";

const installmentTabs = ["همه", "تکمیل شده", "درحال پرداخت"];

function Installments() {
  const [activeTab, setActiveTab] = useState("همه");

  return (
    <>
      <Box sx={{ ...flexCol("32px"), pb: "56px" }}>
        <Box sx={flexBox({ xs: 2, lg: 4 })}>
          <Typography sx={sectionTitle}>دوره های قسطی</Typography>
          <Box sx={flexBox("12px")}>
            {installmentTabs.map((tab) => (
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
        <Box sx={{ ...flexCol(2.5), my: 12, alignItems: "center" }}>
          <SvgIcon name="notFound" size={150} />
          <Typography sx={{ fontWeight: 600 }}>
            موردی برای نمایش وجود ندارد!
          </Typography>
          <Typography variant="subtitle2">
            درحال حاضر هیچ دوره ای برای نمایش نیست...
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Installments;
