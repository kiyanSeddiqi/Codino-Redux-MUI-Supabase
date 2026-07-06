import { Box, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../../../styles/globalStyles";
import { courseContentData } from "../../../../data/courseContentData";

function CourseContentSection() {
  return (
    <>
      <Box id="#content" component="section" sx={flexCol(2.5)}>
        <Typography sx={sectionTitle} component="h4">
          محتوای دوره
        </Typography>
        <Typography sx={{ lineHeight: "32px" }}>
          فریم‌ورک محبوب React یکی از پرتقاضاترین کتابخانه‌های جاوااسکریپت در
          بازار کار برنامه‌نویسی فرانت‌اند است. تقریباً تمام شرکت‌های بزرگ
          نرم‌افزاری و استارتاپ‌ها در دنیا و ایران از React برای توسعه
          وب‌اپلیکیشن‌های مدرن خود استفاده می‌کنند. بنابراین یادگیری React
          می‌تواند نقطه شروعی عالی برای ورود به دنیای برنامه‌نویسی حرفه‌ای و
          بازار کار پردرآمد باشد.
        </Typography>
        <Typography component="strong" sx={{ fontWeight: 700 }}>
          چرا این دوره با دوره‌های دیگر متفاوت است؟
        </Typography>
        <Box component="ul" sx={{ ...flexCol(2), pr: 5 }}>
          {courseContentData.map((item, i) => (
            <Box key={i} component="li" sx={{ listStyle: "disc" }}>
              <Typography>
                <strong>{item.title}</strong>
                {item.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default CourseContentSection;
