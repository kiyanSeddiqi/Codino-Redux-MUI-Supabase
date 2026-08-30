import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  roadMapCardContainer,
  roadMapCardContent,
  roadMapCardImg,
  roadMapCardImgBox,
  roadMapCardStepNum,
  roadMapCardStepText,
  roadMapCardTitle,
} from "./roadMapStyles";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { ArrowOutward } from "@mui/icons-material";

function RoadMapCard({ itemData }) {
  return (
    <>
      <Card sx={roadMapCardContainer}>
        <Box component={Link} to={itemData.slug} sx={roadMapCardImgBox}>
          <CardMedia
            component="img"
            loading="lazy"
            sx={roadMapCardImg}
            image={itemData.imgSrc}
            alt={`بنر ${itemData.title}`}
          />
        </Box>
        <CardContent sx={roadMapCardContent}>
          <Typography component={Link} to={itemData.slug} sx={roadMapCardTitle}>
            {itemData.title}
          </Typography>
          <Divider />
          <Box sx={{ ...flexCol("24px"), minHeight: "174px" }}>
            {itemData.steps.map((step, i) => (
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
                key={i}
              >
                <Typography component="strong" sx={roadMapCardStepNum}>
                  0{i + 1}
                </Typography>
                <Typography sx={roadMapCardStepText}>{step}</Typography>
              </Box>
            ))}
          </Box>
          <Divider />
          <Box
            component={Link}
            to={itemData.slug}
            sx={{
              ...flexBetween(),
              color: "primary.main",
              ":focus": { outline: "none" },
            }}
          >
            <Box sx={flexBox(1)}>
              <SvgIcon name="path" size={24} />
              <Typography
                component="span"
                sx={{ fontSize: { xs: "14px", md: "16px" } }}
              >
                مشاهده ادامه مسیر
              </Typography>
            </Box>
            <ArrowOutward sx={{ rotate: "-90deg" }} />
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default RoadMapCard;
