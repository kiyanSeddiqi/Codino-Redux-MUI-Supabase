import { Box, Chip, Typography } from "@mui/material";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import CourseBadge from "./CourseBadge";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { courseHeaderBox, courseHeaderTitle } from "./courseHeaderStyles";

function CourseHeader() {
  return (
    <>
      <Box sx={courseHeaderBox}>
        <Typography component="h1" sx={courseHeaderTitle}>
          آموزش پایتون (python) - از مقدماتی تا پیشرفته
        </Typography>

        <Box sx={flexBetween("row")}>
          <Box sx={flexBox("10px")}>
            <CourseBadge
              iconName={"doc"}
              color="error.main"
              bgcolor="error.light"
            >
              دوره به پایان رسیده
            </CourseBadge>

            <Chip
              color="success"
              label="امکان پرداخت قسطی"
              icon={<SvgIcon name="credit" size={24} />}
            />

            {/* <CourseBadge
              iconName={"credit"}
              color="success.main"
              bgcolor="success.light"
            >
              امکان پرداخت قسطی
            </CourseBadge> */}
            <CourseBadge iconName={"certificate"} border={1}>
              گواهینامه پایان دوره
            </CourseBadge>
          </Box>
          <Box sx={flexBox(1)}>
            <Typography>از میانگین 250 رأی</Typography>
            <Box sx={flexBetween("6px")}>
              <Typography
                component="span"
                sx={{ fontFamily: "sans-serif", fontWeight: 600 }}
              >
                4.5
              </Typography>
              <SvgIcon name="star" size={20} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography sx={{ mb: 2, lineHeight: "32px" }}>
        اگر شما هم قصد یادگیری زبان همه کاره پایتون را دارید، مسیر درستی را
        انتخاب کرده اید. فرقی نمی کند که ابتدای راه باشید یا نیمه های مسیر، دوره
        آموزش پایتون (python) یک تجربه یادگیری گام به گام را ارائه می دهد که هم
        مفاهیم پایه و هم مفاهیم پیشرفته را پوشش می دهد. در این راهنمای جامع، ما
        به بررسی چیستی پایتون، کاربرد های آن، ویژگی ‌های کلیدی، پیش نیاز ها،
        بازار کار، مهارت‌ های تکمیلی، آینده پایتون و ... خواهیم پرداخت. در طول
        دوره نیز، پروژه‌ هایی عملی برای تقویت مهارت‌ های شما ارائه می شود.
      </Typography>
    </>
  );
}

export default CourseHeader;
