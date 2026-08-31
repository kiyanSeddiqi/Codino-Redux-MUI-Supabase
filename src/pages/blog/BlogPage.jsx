import { Box, Typography } from "@mui/material";
import { flexCol, sectionTitle } from "../../styles/globalStyles";
import BreadCrumb from "../../components/ui/Breadcrumb/BreadCrumb";
import { blogContainer, blogGridContainer } from "./blogPageStyle";
import { blogData } from "../../data/blogData";
import BlogCard from "./BlogCard";
import BlogSlider from "../home/sections/Blog/BlogSlider";

function BlogPage() {
  const items = [{ title: "وبلاگ" }];

  return (
    <>
      <Box sx={{ ...flexCol(5), mt: 4, mb: 6 }}>
        <BreadCrumb items={items} />
        <Box sx={blogContainer}>
          <Box sx={{ ...flexCol(4), flex: 1 }}>
            <Typography sx={sectionTitle}>آخرین مطالب</Typography>
            <Box sx={flexCol(4)}>
              <Box sx={blogGridContainer}>
                {blogData.map((item) => (
                  <BlogCard key={item.id} itemData={item} />
                ))}
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: {
                xs: "100%",
                lg: "33%",
                position: "sticky",
                top: "110px",
              },
              height: "100%",
            }}
          >
            <BlogSlider />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BlogPage;
