import { Box, Divider, Typography } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import { cardImg, cardImgBox, cardTitle } from "./coursePackStyle";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import { ArrowOutward } from "@mui/icons-material";

function CoursePackCard({ itemData }) {
  return (
    <>
      <Box sx={flexCol(2.5)}>
        <Box component={Link} to={itemData.slug} sx={cardImgBox}>
          <Box
            component="img"
            alt="بنر پک آموزشی"
            src={itemData.imgSrc}
            sx={cardImg}
            loading={itemData.id === 2 ? "eager" : "lazy"}
            fetchPriority={itemData.id === 2 ? "high" : "low"}
          />
        </Box>
        <Typography component={Link} to={itemData.slug} sx={cardTitle}>
          {itemData.title}
        </Typography>
        <Box sx={flexBetween(1, "row")}>
          <Typography>{itemData.courseNum} دوره</Typography>
          <Typography>
            <Typography component="span" sx={{ color: "error.main", pl: 1 }}>
              {itemData.discount}%
            </Typography>
            تخفیف بیشتر
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ ...flexBetween(1, "row"), color: "primary.main" }}>
          <Box sx={flexBox(1)} component={Link} to={itemData.slug}>
            <SvgIcon name="path" size={24} />
            <Typography>مشاهده مسیر</Typography>
          </Box>
          <ArrowOutward sx={{ rotate: "-90deg" }} />
        </Box>
      </Box>
    </>
  );
}

export default CoursePackCard;
