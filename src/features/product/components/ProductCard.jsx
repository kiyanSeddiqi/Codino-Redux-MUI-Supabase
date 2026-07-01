import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  cardContainer,
  cardContent,
  cardImg,
  cardImgBox,
  cardLevelBadge,
  cardStatusBadge,
  cardTitle,
  cardTitleBox,
} from "../styles/productCardStyles";
import { Box, Divider, Tooltip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { flexBetween, flexCenter, flexCol } from "../../../styles/globalStyles";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import {
  AccessAlarm,
  AccessTime,
  ArrowOutward,
  PermIdentity,
} from "@mui/icons-material";
import { addComma } from "../../../utils/helpers";
import {
  expertCardContainer,
  expertCardImgBox,
} from "../../../pages/home/sections/Expert/expertCoursesStyles";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function ProductCard({ itemData, layout = "default" }) {
  const theme = useTheme();

  return (
    <>
      <Card sx={[layout === "expert" ? expertCardContainer : cardContainer]}>
        <Box
          component={Link}
          to={itemData.slug}
          sx={[layout === "expert" ? expertCardImgBox : cardImgBox]}
        >
          <CardMedia
            sx={cardImg}
            image={itemData.img}
            alt={`تصویر ${itemData.title}`}
            component="img"
            loading="lazy"
          />
        </Box>
        <CardContent sx={cardContent}>
          <Box sx={cardTitleBox}>
            <Box sx={{ display: "flex", gap: 1 }}>
              <Box sx={cardLevelBadge}>{levelLabels[itemData.level]}</Box>
              {itemData.status === "completed" ? (
                <Tooltip title="دوره به پایان رسیده">
                  <Box sx={{ ...cardStatusBadge, bgcolor: "error.light" }}>
                    <SvgIcon
                      name="doc"
                      size={18}
                      color={theme.palette.error.main}
                    />
                  </Box>
                </Tooltip>
              ) : (
                <Tooltip title="دوره درحال بروز رسانی">
                  <Box sx={{ ...cardStatusBadge, bgcolor: "menuItemBg" }}>
                    <SvgIcon
                      name="refresh"
                      size={18}
                      color={theme.palette.primary.main}
                    />
                  </Box>
                </Tooltip>
              )}
            </Box>
            <Typography
              variant="h5"
              component={Link}
              to={itemData.slug}
              sx={cardTitle}
            >
              {itemData.title}
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ ...flexCol("10px"), fontSize: "12px" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTime sx={{ fontSize: "20px" }} />
              <Typography component="span" dir="ltr" variant="caption">
                {itemData.duration}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PermIdentity sx={{ fontSize: "20px" }} />
              <Typography component="span" variant="caption">
                {itemData.teacher}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={flexBetween("row")}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
              <Typography
                component="strong"
                sx={{
                  fontWeight: 700,
                  fontSize: itemData.price !== 0 && "18px",
                }}
              >
                {itemData.price === 0 ? "رایگان!" : addComma(itemData.price)}
              </Typography>
              {itemData.price !== 0 && (
                <Typography component="span" variant="caption">
                  تومان
                </Typography>
              )}
            </Box>
            <Link
              to={itemData.slug}
              style={{ display: "flex" }}
              aria-label="دکمه نمایش جزییات محصول"
            >
              <ArrowOutward
                sx={{
                  rotate: "-90deg",
                  color: "primary.main",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
