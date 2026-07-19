import { Box, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { courseHeaderBox, courseHeaderTitle } from "./courseHeaderStyles";

function CourseHeader({ product }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <Box sx={courseHeaderBox}>
        <Typography component="h1" sx={courseHeaderTitle}>
          {product.title}
        </Typography>
        <Box sx={{ ...flexBetween(2, "row"), flexWrap: "wrap" }}>
          <Box sx={flexBox("10px")}>
            {product.status === "completed" ? (
              <Chip
                color="warning"
                label="دوره به پایان رسیده"
                icon={<SvgIcon name="doc" size={24} />}
              />
            ) : (
              <Chip
                color="normal"
                label="دوره درحال برگزاری"
                icon={<SvgIcon name="refresh" size={24} />}
              />
            )}
            {product.hasInstallment && (
              <Chip
                color="success"
                label="امکان پرداخت قسطی"
                icon={<SvgIcon name="credit" size={24} />}
              />
            )}
            {product.hasCertificate && isDesktop && (
              <Chip
                variant="outlined"
                label="گواهینامه پایان دوره"
                icon={<SvgIcon name="certificate" size={24} />}
              />
            )}
          </Box>
          <Box sx={flexBox(1)}>
            <Typography>از میانگین 250 رأی</Typography>
            <Box sx={flexBetween("6px")}>
              <Typography
                component="span"
                sx={{ fontFamily: "sans-serif", fontWeight: 600 }}
              >
                4.5
              </Typography>
              <SvgIcon name="star" size={20} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Typography
        sx={{ lineHeight: "32px", fontSize: { xs: "14px", md: "16px" } }}
      >
        {product.description}
      </Typography>
    </>
  );
}

export default CourseHeader;
