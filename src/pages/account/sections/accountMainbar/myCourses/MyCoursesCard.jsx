import {
  Box,
  Button,
  Chip,
  Divider,
  LinearProgress,
  Typography,
} from "@mui/material";
import {
  cardImg,
  cardImgBox,
  cardTextContainer,
  myCourseCardBox,
} from "./myCoursesStyle";
import { flexBox, flexCol } from "../../../../../styles/globalStyles";
import { ChevronLeft, PermIdentity, Schedule } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useUpdateCourseProgress } from "../../../../../features/product/hooks/useUpdateCourseProgress";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function MyCoursesCard({ itemData, onProgressUpdate }) {
  const { updateProgressHandler } = useUpdateCourseProgress();

  async function progressHandler() {
    let newProgressValue = Math.min(itemData.progress + 10, 100);
    await updateProgressHandler(itemData.userCourseId, newProgressValue);

    onProgressUpdate(itemData.userCourseId, newProgressValue);
  }

  return (
    <>
      <Box sx={myCourseCardBox}>
        <Box sx={cardImgBox}>
          <Box
            component="img"
            alt="تصویر دوره آموزشی"
            src={itemData.imageUrl}
            loading="lazy"
            sx={cardImg}
          />
        </Box>
        <Box sx={cardTextContainer}>
          <Box sx={flexCol(2)}>
            <Box sx={flexCol("12px")}>
              <Chip
                label={levelLabels[itemData.level]}
                color="normal"
                sx={{ width: "fit-content" }}
              />
              <Box component={Link} to={`/course/${itemData.slug}`}>
                <Typography
                  sx={{
                    "&:hover": {
                      color: "primary.main",
                      transition: "color 0.3s ease",
                    },
                  }}
                >
                  {itemData.title}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                pt: "12px",
                borderTop: 1,
                borderColor: "divider",
                ...flexBox(2.5),
                "& span": {
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            >
              <Box sx={flexBox(1)}>
                <PermIdentity sx={{ fontSize: "20px" }} />
                <Typography component="span">{itemData.teacher}</Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={flexBox(1)}>
                <Schedule sx={{ fontSize: "20px" }} />
                <Typography component="span" dir="ltr">
                  {itemData.duration}
                </Typography>
              </Box>
            </Box>
            <Box sx={flexBox("10px")}>
              <Typography variant="subtitle2" sx={{ color: "primary.main" }}>
                پیشرفت دوره
              </Typography>
              <Typography
                component="strong"
                sx={{
                  color: "primary.main",
                  fontWeight: 700,
                  fontSize: "18px",
                }}
                dir="ltr"
              >
                {itemData.progress ?? 0} %
              </Typography>
              <Box sx={{ flex: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={itemData.progress ?? 0}
                  aria-label="course progress"
                  sx={{ height: "6px", borderRadius: "10px" }}
                />
              </Box>
            </Box>
            <Button
              onClick={progressHandler}
              sx={{
                width: "fit-content",
                alignSelf: "flex-end",
                p: 1,
                fontSize: "12px",
              }}
              variant="outlined"
              disabled={itemData.progress === 100}
            >
              {itemData.progress === 0
                ? "شروع یادگیری"
                : itemData.progress === 100
                  ? "تکمیل شده"
                  : "ادامه یادگیری"}

              <ChevronLeft sx={{ fontSize: "20px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyCoursesCard;
