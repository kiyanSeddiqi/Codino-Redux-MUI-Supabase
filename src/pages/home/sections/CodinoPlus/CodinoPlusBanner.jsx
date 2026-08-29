import { Box, Button, Typography } from "@mui/material";
import {
  bannerBtnWrapper,
  bannerContainer,
  bannerImg,
  bannerText,
  bannerTextBox,
} from "./codinoPlusStyles";
import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { platforms } from "../../../../data/imgSource";

function CodinoPlusBanner() {
  return (
    <>
      <Box sx={bannerContainer}>
        <Box sx={bannerTextBox}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: 20, lg: 24 }, fontWeight: 700 }}
          >
            کدینو پلاس؛ یادگیری حرفه‌ای با دوره‌های بین‌المللی!
          </Typography>
          <Typography sx={bannerText}>
            یادگیری حرفه‌ای حالا در دسترس‌تر از همیشه است—با اشتراک کدینو پلاس،
            آموزش جهانی رو به زبان خودت تجربه کن.
          </Typography>
          <Box sx={bannerBtnWrapper}>
            <Button component={Link} to="/courses?filter=plusCourse">
              مشاهده دوره ها
              <ArrowOutward sx={{ rotate: "-90deg", fontSize: "20px" }} />
            </Button>
            <Button component={Link} to="/" color="secondary">
              تهیه اشتراک پلاس
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          sx={bannerImg}
          src={platforms}
          loading="lazy"
          alt="پلتفرم های آموزشی"
        ></Box>
      </Box>
    </>
  );
}

export default CodinoPlusBanner;
