import { Box, Chip, Divider, Typography } from "@mui/material";
import { flexBox, flexCol } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { blogCardImg, blogCardImgBox, blogCardText } from "./blogPageStyle";
import { CalendarMonth, PermIdentity } from "@mui/icons-material";
import { getRelativeTime } from "../../utils/helpers";

function BlogCard({ itemData }) {
  return (
    <>
      <Box sx={flexCol(2.5)}>
        <Box component={Link} to={itemData.slug} sx={blogCardImgBox}>
          <Box
            component="img"
            alt={`تصویر ${itemData.title}`}
            src={itemData.imgSrc}
            sx={blogCardImg}
            loading={itemData.id === 1 ? "eager" : "lazy"}
            fetchPriority={itemData.id === 1 ? "high" : "low"}
          />
        </Box>
        <Box sx={{ ...flexCol("10px"), px: 2.5 }}>
          <Chip
            color="normal"
            label={itemData.badge}
            sx={{ width: "max-content" }}
          />
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: {
                xs: "14px",
                lg: "16px",
              },
              overflow: { xs: "hidden", md: "visible" },
              whiteSpace: { xs: "nowrap", md: "normal" },
              textOverflow: { xs: "ellipsis", md: "clip" },
            }}
          >
            {itemData.title}
          </Typography>
          <Typography variant="caption" sx={blogCardText}>
            {itemData.text}
          </Typography>
          <Box sx={flexBox(2.5)}>
            <Box sx={flexBox(1)}>
              <PermIdentity sx={{ fontSize: "20px" }} />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                {itemData.author}
              </Typography>
            </Box>
            <Divider flexItem orientation="vertical" />
            <Box sx={flexBox(1)}>
              <CalendarMonth sx={{ color: "primary.main" }} />
              <Typography variant="caption" sx={{ mt: 0.5 }}>
                {getRelativeTime(itemData.created_at)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default BlogCard;
