import { Box, Divider, Typography } from "@mui/material";
import { flexBetween, flexBox, flexCol } from "../../styles/globalStyles";
import { Link } from "react-router-dom";
import {
  roadmapCardImg,
  roadmapCardImgBox,
  roadmapCardTitle,
} from "./roadmapStyle";
import SvgIcon from "../../components/ui/SvgIcon/SvgIcon";
import { ArrowOutward } from "@mui/icons-material";

function RoadmapCard({ itemData }) {
  return (
    <>
      <Box sx={flexCol(2)}>
        <Box component={Link} to={itemData.slug} sx={roadmapCardImgBox}>
          <Box
            component="img"
            alt="بنر مسیر یادگیری"
            src={itemData.imgSrc}
            sx={roadmapCardImg}
            loading={itemData.id === 2 ? "eager" : "lazy"}
            fetchPriority={itemData.id === 2 ? "high" : "low"}
          />
        </Box>
        <Typography component={Link} to={itemData.slug} sx={roadmapCardTitle}>
          {itemData.title}
        </Typography>
        <Divider />
        <Box sx={{ ...flexBetween(1, "row"), color: "primary.main" }}>
          <Box sx={flexBox(1)} component={Link} to={itemData.slug}>
            <SvgIcon name="path" size={24} />
            <Typography sx={{ fontSize: { xs: "14px", sm: "16px" } }}>
              مشاهده مسیر
            </Typography>
          </Box>
          <ArrowOutward sx={{ rotate: "-90deg" }} />
        </Box>
      </Box>
    </>
  );
}

export default RoadmapCard;
