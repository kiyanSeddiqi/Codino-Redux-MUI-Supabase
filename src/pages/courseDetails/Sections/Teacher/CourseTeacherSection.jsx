import { Avatar, Box, Divider, Typography } from "@mui/material";
import {
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import { default_avatar, mentor_1 } from "../../../../data/imgSource";
import { Groups, Person } from "@mui/icons-material";

function CourseTeacherSection({ product }) {
  return (
    <>
      <Box id="teacher" component="section" sx={flexCol(2.5)}>
        <Typography sx={sectionTitle} component="h4">
          دربارۀ مدرس
        </Typography>
        <Box sx={{ ...flexCol(2.5), alignItems: "flex-start" }}>
          <Box sx={flexBox(2.5)}>
            <Avatar
              sx={{ width: "48px", height: "48px" }}
              src={product.teacher !== "کدینو پلاس" ? mentor_1 : default_avatar}
              alt="تصویر مدرس دوره"
            />
            <Box sx={flexCol("4px")}>
              <Typography sx={{ fontWeight: 500, color: "primary.main" }}>
                {product.teacher}
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
          </Box>
          <Box sx={flexCol(2.5)}>
            <Box sx={{ ...flexBox(2.5), flexWrap: "wrap" }}>
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
            <Box
              sx={{
                "& p": {
                  lineHeight: "32px",
                  fontSize: { xs: "14px", md: "16px" },
                },
              }}
            >
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
