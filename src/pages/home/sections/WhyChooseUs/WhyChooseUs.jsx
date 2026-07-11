import { Box, Button, List, ListItem, Typography } from "@mui/material";
import { flexBox, sectionStyle } from "../../../../styles/globalStyles";
import {
  whyChooseUsBox,
  whyChooseUsImg,
  whyChooseUsImgBox,
  whyChooseUsListItem,
  whyChooseUsTextBox,
  whyChooseUsTitle,
} from "./whyChooseStyles";
import { why_choose } from "../../../../data/imgSource";
import { ArrowOutward, CheckCircle, Done, TaskAlt } from "@mui/icons-material";
import { Link } from "react-router-dom";

function WhyChooseUs() {
  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Box sx={whyChooseUsBox}>
          <Box sx={whyChooseUsImgBox}>
            <Box
              component="img"
              loading="lazy"
              sx={whyChooseUsImg}
              src={why_choose}
              alt="تصویر مرد با لپ تاپ"
            />
          </Box>
          <Box sx={whyChooseUsTextBox}>
            <Typography sx={whyChooseUsTitle} component="h2">
              از صفر باهات هستیم، تا نزدیکای 100 کنار هم پیش میریم!
            </Typography>
            <Typography sx={{ lineHeight: "32px" }}>
              چه تازه‌کار باشی و چه یه برنامه‌نویس باتجربه که دنبال ارتقاء
              مهارت‌هاشه، در کدینو منابعی متنوع، پروژه‌محور و کاملاً به‌روز برات
              فراهمه.
            </Typography>
            <List disablePadding>
              <ListItem sx={whyChooseUsListItem}>
                <TaskAlt />
                <Typography component="strong">
                  مطالب همیشه به‌روز، هماهنگ با بازار کار
                </Typography>
              </ListItem>
              <ListItem sx={whyChooseUsListItem}>
                <TaskAlt />
                <Typography component="strong">
                  تنوع کامل دوره‌ها برای همه‌ی سطح‌ها
                </Typography>
              </ListItem>
              <ListItem sx={whyChooseUsListItem}>
                <TaskAlt />
                <Typography component="strong">
                  دسترسی به مشاوره و پشتیبانی تخصصی
                </Typography>
              </ListItem>
              <ListItem sx={whyChooseUsListItem}>
                <TaskAlt />
                <Typography component="strong">
                  آموزش از حرفه‌ای‌های بازار کار
                </Typography>
              </ListItem>
            </List>
            <Box sx={flexBox("12px")}>
              <Button component={Link} to="/courses" sx={flexBox("8px")}>
                مشاهده دوره ها
                <ArrowOutward sx={{ rotate: "-90deg", fontSize: "20px" }} />
              </Button>
              <Button
                component={Link}
                to="/free-courses"
                color="secondary"
                variant="contained"
              >
                دوره های رایگان
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WhyChooseUs;
