import { Avatar, Box, Divider, Typography } from "@mui/material";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { mentor_1 } from "../../../../data/imgSource";
import { Groups, Person } from "@mui/icons-material";

function CourseTeacherSection() {
  return (
    <>
      <Box id="teacher" component="section" sx={flexCol(2.5)}>
        <Typography sx={sectionTitle} component="h4">
          درباره ی مدرس
        </Typography>
        <Box sx={{ ...flexBox(2.5), alignItems: "flex-start" }}>
          <Avatar
            sx={{ width: "48px", height: "48px" }}
            src={mentor_1}
            alt="تصویر مدرس دوره"
          />
          <Box sx={{ ...flexCol(2.5), flex: 1 }}>
            <Box sx={flexCol("4px")}>
              <Typography sx={{ fontWeight: 500, color: "primary.main" }}>
                قاسم بساکی
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  "&:hover": { color: "primary.main" },
                  transition: "color 0.2s",
                  width: "fit-content",
                }}
              >
                mahdicmptr@gmail.com
              </Typography>
            </Box>
            <Box sx={flexBox(3)}>
              <Box sx={flexBox("12px")}>
                <Groups sx={{ fontSize: "22px" }} />
                <Typography
                  component="span"
                  variant="subtitle2"
                  sx={{ lineHeight: "20px", fontWeight: 400 }}
                >
                  269 دنبال کننده ها
                </Typography>
              </Box>
              <Divider orientation="vertical" flexItem />
              <Box sx={flexBox("12px")}>
                <Person sx={{ fontSize: "22px" }} />
                <Typography
                  component="span"
                  variant="subtitle2"
                  sx={{ lineHeight: "20px", fontWeight: 400 }}
                >
                  16,738 دانشجو
                </Typography>
              </Box>
            </Box>
            <Box sx={{ "& p": { lineHeight: "32px" } }}>
              <Typography>
                7سال فعالیت در زمینه وب، به عنوان فول استک
              </Typography>
              <Typography>عاشق برنامه نویسی</Typography>
              <Typography>عاشق یادگیری</Typography>
              <Typography>عاشق تدریس و انتقال علم</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CourseTeacherSection;
