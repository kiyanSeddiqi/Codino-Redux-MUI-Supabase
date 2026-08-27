import { Box, Typography } from "@mui/material";
import { flexBox, flexCol } from "../../styles/globalStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import {
  detailContainer,
  listItemTitleBox,
  packDetailBanner,
  packDetailList,
  packDetailListItem,
  packDetailTitle,
} from "./coursePackStyle";
import { zero_pack } from "../../data/imgSource";
import { Link } from "react-router-dom";
import { Check } from "@mui/icons-material";

const items = [
  { title: "پک های آموزشی", link: "/packs" },
  { title: "شروع از صفر تا ورود به دنیای برنامه نویسی" },
];

const frontendPackOrder = [
  12, // HTML
  8, // CSS
  15, // JavaScript
  21, // React
  25, // ...
];
function CoursePackDetail() {
  return (
    <>
      <Box sx={{ ...flexCol(5), mt: 4, mb: 6 }}>
        <BreadCrumb items={items} />
        <Box sx={detailContainer}>
          <Box
            sx={{
              width: "100%",
              aspectRatio: "16 / 9",
              height: { xs: "auto", xl: "400px" },
            }}
          >
            <Box
              component="img"
              alt="بنر پک آموزشی"
              src={zero_pack}
              sx={packDetailBanner}
            />
          </Box>
          <Box sx={flexCol(4)}>
            <Typography component="h1" sx={packDetailTitle}>
              شروع از صفر تا ورود به دنیای برنامه‌نویسی
            </Typography>
            <Typography>
              هدف این بسته آشنایی کامل با مفاهیم اولیه و آماده‌سازی ذهنی و عملی
              برای مسیر برنامه‌نویسی است.
            </Typography>
            <Box component="ul" sx={packDetailList}>
              <Box component="li" sx={packDetailListItem}>
                <Box sx={flexCol("10px")}>
                  <Box sx={listItemTitleBox}>
                    <Typography>1</Typography>
                    <Box component={Link} to="/course/ai-for-everyone">
                      آموزش رایگان هوش مصنوعی به زبان ساده [معرفی ابزارها و
                      مفاهیم هوش مصنوعی]
                    </Box>
                  </Box>
                  <Box></Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CoursePackDetail;
