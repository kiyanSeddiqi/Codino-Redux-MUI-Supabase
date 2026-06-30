import { Box, Typography } from "@mui/material";
import {
  flexBox,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { Link } from "react-router-dom";
import {
  blogContainer,
  blogLeftCardBox,
  blogLeftContainer,
  blogLeftImg,
  blogLeftImgBox,
  blogLeftText,
  blogLeftTextBox,
  blogLeftTitle,
  blogRightContainer,
  blogRightImgBox,
  blogRightTextBox,
} from "./blogStyles";
import { unreal_blog } from "../../../../data/imgSource";
import { blogData } from "../../../../data/blogData";
import { CalendarMonth } from "@mui/icons-material";
import { getRelativeTime } from "../../../../utils/helpers";

// Container یا Box برای سکشن
// Typography برای عنوان
// Grid برای چیدمان راست و چپ
// Card برای هر بلاگ
// CardActionArea برای لینک شدن کل کارت
// CardMedia برای عکس
// CardContent برای متن

function Blog() {
  const [featuredBlog, ...otherBlogs] = blogData;
  return (
    <>
      <Box sx={sectionStyle} component="section">
        <Typography component="h4" sx={sectionTitle}>
          آخرین مطالب بلاگ
        </Typography>
        <Box sx={blogContainer}>
          <Box component={Link} sx={blogRightContainer} to={featuredBlog.slug}>
            <Box sx={blogRightImgBox}>
              <Box
                component="img"
                loading="lazy"
                alt="پوستر بلاگ"
                src={featuredBlog.imgSrc}
              />
            </Box>
            <Box sx={blogRightTextBox}>
              <Typography component="strong" sx={{ fontWeight: 700 }}>
                {featuredBlog.title}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "text.secondary", lineHeight: "32px" }}
              >
                {featuredBlog.text}
              </Typography>
              <Box sx={flexBox("8px")}>
                <CalendarMonth sx={{ color: "primary.main" }} />
                <Typography variant="caption">
                  {getRelativeTime(featuredBlog.created_at)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={blogLeftContainer}>
            {otherBlogs.map((item) => (
              <Box
                component={Link}
                to={item.slug}
                key={item.id}
                sx={blogLeftCardBox}
              >
                <Box sx={blogLeftTextBox}>
                  <Typography component="strong" sx={blogLeftTitle}>
                    {item.title}
                  </Typography>
                  <Typography variant="subtitle2" sx={blogLeftText}>
                    {item.text}
                  </Typography>
                  <Box sx={flexBox("8px")}>
                    <CalendarMonth sx={{ color: "primary.main" }} />
                    <Typography variant="caption">
                      {getRelativeTime(item.created_at)}
                    </Typography>
                  </Box>
                </Box>
                <Box sx={blogLeftImgBox}>
                  <Box
                    component="img"
                    src={item.imgSrc}
                    loading="lazy"
                    alt="پوستر بلاگ"
                    sx={blogLeftImg}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Blog;
