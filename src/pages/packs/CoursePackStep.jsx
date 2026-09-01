import { AccessTime, ArrowOutward, PermIdentity } from "@mui/icons-material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  courseCardImgBox,
  imageStyle,
  listItemTitleBox,
  packDetailCourseCard,
  packDetailListItem,
} from "./coursePackStyle";
import { addComma } from "../../utils/helpers";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function CoursePackStep({ itemData, index }) {
  return (
    <>
      <Box component="li" sx={packDetailListItem}>
        <Box sx={flexCol("10px")}>
          <Box sx={listItemTitleBox}>
            <Typography>{index + 1}</Typography>
            <Typography component={Link} to={`/course/${itemData.slug}`}>
              {itemData.title}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "text.secondary",
              lineHeight: { xs: "28px", md: "32px" },
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {itemData.description}
          </Typography>
        </Box>
        <Box
          component={Link}
          to={`/course/${itemData.slug}`}
          target="_blank"
          rel="noopener noreferrer"
          sx={packDetailCourseCard}
        >
          <Box sx={courseCardImgBox}>
            <Box
              component="img"
              alt={`تصویر ${itemData.title}`}
              src={itemData.imageUrl}
              loading="lazy"
              sx={imageStyle}
            />
          </Box>
          <Box
            sx={{
              ...flexCol("12px"),
              flex: 1,
              minWidth: 0,
              width: "100%",
            }}
          >
            <Box sx={{ ...flexCol(2), minWidth: 0 }}>
              <Chip
                color="normal"
                label={levelLabels[itemData.level]}
                sx={{ width: "max-content" }}
              />
              <Typography
                variant="body2"
                component="h3"
                sx={{
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  minWidth: 0,
                }}
              >
                {itemData.title}
              </Typography>
            </Box>
            <Box
              sx={{
                ...flexCol("12px"),
                pt: "12px",
                borderTop: 1,
                borderColor: "divider",
              }}
            >
              <Box sx={{ ...flexBox(2.5), flexWrap: "wrap" }}>
                <Box sx={flexBox(1)}>
                  <PermIdentity sx={{ fontSize: "20px" }} />
                  <Typography
                    sx={{
                      fontSize: "clamp(12px,2.5vw,16px)",
                    }}
                  >
                    {itemData.teacher}
                  </Typography>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box sx={flexBox(1)}>
                  <AccessTime sx={{ fontSize: "20px" }} />
                  <Typography
                    component="span"
                    dir="ltr"
                    sx={{
                      fontSize: "clamp(12px,2.5vw,16px)",
                      mt: 0.5,
                    }}
                  >
                    {itemData.duration}
                  </Typography>
                </Box>
              </Box>
              <Divider />
              <Box sx={flexBetween(1, "row")}>
                {itemData.price === 0 ? (
                  <Typography
                    sx={{
                      fontSize: { xs: "18px", sm: "20px" },
                      fontWeight: 700,
                    }}
                  >
                    رایگان!
                  </Typography>
                ) : (
                  <Box sx={{ ...flexBox(1), flexWrap: "wrap" }}>
                    <Typography
                      component="del"
                      sx={{ color: "text.secondary" }}
                    >
                      {addComma(itemData.price)}
                    </Typography>
                    <Typography sx={{ fontSize: "18px", fontWeight: 700 }}>
                      {addComma(itemData.price - (itemData.price * 10) / 100)}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "error.main", fontWeight: 700 }}
                    >
                      (10% تخفیف)
                    </Typography>
                  </Box>
                )}

                <IconButton
                  disableRipple
                  aria-label="لینک نمایش جزییات"
                  sx={{
                    color: "primary.main",
                    bgcolor: "menuItemBg",
                    borderRadius: "10px",
                    p: "10px",
                  }}
                >
                  <ArrowOutward sx={{ fontSize: "16px", rotate: "-90deg" }} />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CoursePackStep;
