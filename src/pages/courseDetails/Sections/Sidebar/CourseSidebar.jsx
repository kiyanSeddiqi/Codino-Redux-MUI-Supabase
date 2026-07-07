import { Box, Button, Divider, Tooltip, Typography } from "@mui/material";
import {
  imgBackdrop,
  sidebarContainer,
  sidebarGemBox,
  sidebarImg,
  sidebarImgBox,
  sidebarinfoBox,
} from "./sideBarStyles";
import { productsImgs } from "../../../../data/productsImages";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import { flexBox, flexCol } from "../../../../styles/globalStyles";
import { addComma } from "../../../../utils/helpers";
import { AccessTime, Person } from "@mui/icons-material";

function CourseSidebar() {
  return (
    <>
      <Box sx={sidebarContainer}>
        <Box sx={sidebarImgBox}>
          <Box
            component="img"
            src={productsImgs.react}
            alt="تصویر دوره جامع ری اکت"
            sx={sidebarImg}
          />
          <Box sx={imgBackdrop}>
            <SvgIcon name="playVideoFilled" color="#fff" size={120} />
          </Box>
        </Box>
        <Box sx={sidebarinfoBox}>
          <Box sx={{ ...flexBox(1), mr: "auto" }}>
            <Typography
              component="strong"
              sx={{ fontSize: "24px", fontWeight: 700 }}
            >
              {/* if price !==0  */}
              {addComma(4490000)}
            </Typography>
            <Typography component="span" variant="caption">
              تومان
            </Typography>
          </Box>
          <Button>ثبت نام در دوره</Button>
          {/* if hasInstallment true */}
          {
            <Button color="secondary">
              <SvgIcon name="credit" size={20} />
              خرید اقساطی دوره
            </Button>
          }
          <Divider />
          <Box sx={flexCol(2.5)}>
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
                  قاسم بساکی
                </Typography>
              </Box>
            </Box>
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
                  مقدماتی تا پیشرفته
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
                  13 : 45 : 41
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* if price!==0  */}
        {
          <Box sx={sidebarGemBox}>
            <Typography component="span">با خرید این دوره</Typography>
            <Tooltip title="کدینو جم">
              <Box sx={flexBox(1)}>
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
        }
      </Box>
    </>
  );
}

export default CourseSidebar;
