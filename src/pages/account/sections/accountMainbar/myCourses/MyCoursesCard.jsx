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
import {
  AccessAlarm,
  ChevronLeft,
  PermIdentity,
  Schedule,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function MyCoursesCard({ itemData }) {
  return (
    <>
      <Box sx={myCourseCardBox}>
        <Box sx={cardImgBox}>
          <Box
            component="img"
            alt="تصویر دوره آموزشی"
            src={itemData.img}
            loading="lazy"
            sx={cardImg}
          />
        </Box>
        <Box sx={cardTextContainer}>
          <Box sx={flexCol(2.5)}>
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
                {itemData.progress} %
              </Typography>
              <Box sx={{ flex: 1 }}>
                <LinearProgress
                  variant="determinate"
                  value={itemData.progress}
                  aria-label="course progress"
                  sx={{ height: "6px", borderRadius: "10px" }}
                />
              </Box>
            </Box>
            <Button
              sx={{
                width: "fit-content",
                alignSelf: "flex-end",
                p: 1,
                fontSize: "12px",
              }}
              variant="outlined"
              disabled={itemData.progress === 100}
            >
              شروع یادگیری
              <ChevronLeft sx={{ fontSize: "20px" }} />
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default MyCoursesCard;
