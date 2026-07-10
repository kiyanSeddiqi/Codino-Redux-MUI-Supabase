import { Box, Button, Chip, Divider, Tooltip, Typography } from "@mui/material";
import {
  imgBackdrop,
  sidebarContainer,
  sidebarGemBox,
  sidebarHeaderBox,
  sidebarHeaderTitle,
  sidebarImg,
  sidebarImgBox,
  sidebarinfoBox,
} from "./sideBarStyles";
import { productsImgs } from "../../../../data/productsImages";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { flexBetween, flexBox, flexCol } from "../../../../styles/globalStyles";
import { addComma } from "../../../../utils/helpers";
import { AccessTime, Person } from "@mui/icons-material";
import { useState } from "react";
import VideoDialog from "./VideoDialog/VideoDialog";

const levelLabels = {
  beginner: "مقدماتی",
  advanced: "مقدماتی تا پیشرفته",
};

function CourseSidebar({ product }) {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <Box sx={sidebarContainer}>
        <Box sx={sidebarHeaderBox}>
          <Typography component="h1" sx={sidebarHeaderTitle}>
            {product.title}
          </Typography>
          <Box sx={{ ...flexBetween(2, "row"), flexWrap: "wrap" }}>
            <Box sx={{ ...flexBox("10px"), flexWrap: "wrap" }}>
              {product.status === "completed" ? (
                <Chip
                  color="error"
                  label="دوره به پایان رسیده"
                  icon={<SvgIcon name="doc" size={24} />}
                />
              ) : (
                <Chip
                  color="info"
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
              {product.hasCertificate && (
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
        <Box sx={sidebarImgBox}>
          <Box
            component="img"
            src={product.img}
            alt={`تصویر ${product.title}`}
            sx={sidebarImg}
          />
          <Box sx={imgBackdrop} onClick={() => setOpenVideo(true)}>
            <SvgIcon name="playVideoFilled" color="#fff" size={120} />
          </Box>
        </Box>
        <Box sx={sidebarinfoBox}>
          <Box sx={{ ...flexBox(1), mr: "auto" }}>
            <Typography
              component="strong"
              sx={{ fontSize: { xs: "20px", md: "24px" }, fontWeight: 700 }}
            >
              {product.price !== 0 ? addComma(product.price) : "رایگان !"}
            </Typography>
            {product.price !== 0 && (
              <Typography component="span" variant="caption">
                تومان
              </Typography>
            )}
          </Box>
          <Button>ثبت نام در دوره</Button>
          {product.tags.includes("plus") && (
            <Box sx={flexCol(1)}>
              <Typography
                variant="caption"
                sx={{
                  color: "primary.main",
                  fontWeight: 500,
                  lineHeight: "32px",
                }}
              >
                با خرید اشتراک کدیاد پلاس، محتوای این دوره و ده‌ها دوره دیگر را
                به صورت رایگان دریافت می‌کنید!
              </Typography>
              <Button variant="outlined">
                <SvgIcon name="codinoPlus" size={20} />
                خرید اشتراک
              </Button>
            </Box>
          )}
          {product.hasInstallment && (
            <Button color="secondary">
              <SvgIcon name="credit" size={20} />
              خرید اقساطی دوره
            </Button>
          )}
          <Divider />
          <Box sx={flexCol(2.5)}>
            {product.tags.includes("plus") ? (
              <>
                <Box sx={flexCol("6px")}>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    زبان
                  </Typography>
                  <Box sx={flexBox("4px")}>
                    <SvgIcon name="language" size={20} />
                    <Typography
                      component="span"
                      sx={{ lineHeight: "20px", fontSize: "14px" }}
                    >
                      انگلیسی
                    </Typography>
                  </Box>
                </Box>
                <Box sx={flexCol("6px")}>
                  <Typography
                    component="span"
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    زیر نویس
                  </Typography>
                  <Box sx={flexBox("4px")}>
                    <SvgIcon name="subtitle" size={20} />
                    <Typography
                      component="span"
                      sx={{ lineHeight: "20px", fontSize: "14px" }}
                    >
                      زیرنویس فارسی اختصاصی
                    </Typography>
                  </Box>
                </Box>
              </>
            ) : (
              <Box sx={flexCol("6px")}>
                <Typography
                  component="span"
                  variant="caption"
                  sx={{ color: "text.secondary" }}
                >
                  مدرس
                </Typography>
                <Box sx={flexBox("4px")}>
                  <Person sx={{ fontSize: "20px" }} />
                  <Typography
                    component="span"
                    sx={{ lineHeight: "20px", fontSize: "14px" }}
                  >
                    {product.teacher}
                  </Typography>
                </Box>
              </Box>
            )}

            <Box sx={flexCol("6px")}>
              <Typography
                component="span"
                variant="caption"
                sx={{ color: "text.secondary" }}
              >
                سطح دوره
              </Typography>
              <Box sx={flexBox("4px")}>
                <SvgIcon name="doc" size={20} />
                <Typography
                  component="span"
                  sx={{ lineHeight: "20px", fontSize: "14px" }}
                >
                  {levelLabels[product.level]}
                </Typography>
              </Box>
            </Box>
            <Box sx={flexCol("6px")}>
              <Typography
                component="span"
                variant="caption"
                sx={{ color: "text.secondary" }}
              >
                طول دوره
              </Typography>
              <Box sx={flexBox("4px")}>
                <AccessTime sx={{ fontSize: "20px" }} />
                <Typography
                  component="span"
                  dir="ltr"
                  sx={{ lineHeight: "20px", fontSize: "14px" }}
                >
                  {product.duration}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {product.price !== 0 && (
          <Box sx={sidebarGemBox}>
            <Typography component="span">با خرید این دوره</Typography>

            <Box sx={flexBox(1)}>
              <Tooltip title="کدینو جم">
                <Box sx={flexBox(0.5)}>
                  <Typography
                    component="strong"
                    sx={{ fontSize: "18px", color: "primary.main" }}
                  >
                    4490
                  </Typography>
                  <SvgIcon name="gem" size={24} />
                </Box>
              </Tooltip>
              <Typography component="span">دریافت می کنید!</Typography>
            </Box>
          </Box>
        )}
      </Box>
      <VideoDialog
        isOpen={openVideo}
        onShow={setOpenVideo}
        videoTitle={product.title}
      />
    </>
  );
}

export default CourseSidebar;
