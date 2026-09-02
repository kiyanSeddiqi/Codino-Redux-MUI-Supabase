import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  cardContainer,
  cardContent,
  cardImg,
  cardImgBox,
  cardStatusBadge,
  cardTitle,
  cardTitleBox,
  featuredCardContainer,
  featuredCardImgBox,
} from "../styles/productCardStyles";
import { Box, Chip, Divider, Tooltip, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { flexBetween, flexBox } from "../../../styles/globalStyles";
import SvgIcon from "../../../components/ui/SvgIcon/SvgIcon";
import { AccessTime, ArrowOutward, PermIdentity } from "@mui/icons-material";
import { addComma } from "../../../utils/helpers";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function ProductCard({ itemData, layout = "default" }) {
  const theme = useTheme();

  return (
    <>
      <Card
        sx={[layout === "featured" ? featuredCardContainer : cardContainer]}
      >
        <Box
          component={Link}
          to={`/course/${itemData.slug}`}
          sx={[layout === "featured" ? featuredCardImgBox : cardImgBox]}
        >
          <CardMedia
            sx={cardImg}
            image={itemData.imageUrl}
            alt={`تصویر ${itemData.title}`}
            component="img"
            loading="lazy"
          />
        </Box>
        <CardContent sx={cardContent}>
          <Box sx={cardTitleBox}>
            <Box sx={flexBetween(1)}>
              <Box sx={flexBox(1)}>
                <Chip
                  color="normal"
                  label={levelLabels[itemData.level]}
                  sx={{ height: "26px" }}
                />
                {itemData.status === "completed" ? (
                  <Tooltip title="دوره به پایان رسیده" describeChild>
                    <Box
                      component="span"
                      sx={{ ...cardStatusBadge, bgcolor: "badgeWarning.light" }}
                    >
                      <SvgIcon
                        name="doc"
                        size={18}
                        color={theme.palette.badgeWarning.main}
                      />
                    </Box>
                  </Tooltip>
                ) : (
                  <Tooltip title="دوره درحال بروز رسانی" describeChild>
                    <Box
                      component="span"
                      sx={{ ...cardStatusBadge, bgcolor: "bgAccent" }}
                    >
                      <SvgIcon
                        name="refresh"
                        size={18}
                        color={theme.palette.primary.main}
                      />
                    </Box>
                  </Tooltip>
                )}
              </Box>
              {itemData.has_certificate && (
                <SvgIcon name="certificate" size={24} />
              )}
            </Box>
            <Typography
              variant="h5"
              component={Link}
              to={`/course/${itemData.slug}`}
              sx={cardTitle}
            >
              {itemData.title}
            </Typography>
          </Box>
          <Divider />
          <Box
            sx={{
              display: "flex",
              gap: 2,
              flexDirection: { xs: "row", sm: "column" },
              fontSize: "12px",
              minWidth: 0,
              flex: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexShrink: 0,
              }}
            >
              <AccessTime sx={{ fontSize: "20px" }} />
              <Typography
                component="span"
                dir="ltr"
                variant="caption"
                sx={{ mt: 0.5 }}
              >
                {itemData.duration}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                minWidth: 0,
              }}
            >
              <PermIdentity sx={{ fontSize: "20px", flexShrink: 0 }} />
              <Typography
                component="span"
                variant="caption"
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  minWidth: 0,
                }}
              >
                {itemData.teacher}
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box sx={flexBetween("row")}>
            <Box sx={flexBox("4px")}>
              <Typography
                component="strong"
                sx={{
                  fontWeight: 700,
                  fontSize:
                    itemData.price !== 0
                      ? { xs: "16px", sm: "18px" }
                      : undefined,
                  color: layout === "featured" ? "primary.main" : undefined,
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
            <Box
              component={Link}
              to={`/course/${itemData.slug}`}
              aria-label={`مشاهده دوره ${itemData.title}`}
              sx={{
                display: "flex",
                "&:focus": { outline: "none" },
              }}
            >
              <ArrowOutward
                sx={{
                  rotate: "-90deg",
                  color: "primary.main",
                  fontSize: { xs: "20px", sm: "24px" },
                }}
              />
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default ProductCard;
