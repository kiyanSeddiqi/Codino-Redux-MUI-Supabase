import { default_avatar } from "../../../../../data/imgSource";
import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import {
  flexBetween,
  flexBox,
  flexCol,
  sectionTitle,
} from "../../../../../styles/globalStyles";
import {
  dashboardCard,
  dashboardCardContainer,
  dashboardUserImg,
  mySuggestedCourses,
} from "./dashboardStyle";
import { useSelector } from "react-redux";
import SvgIcon from "../../../../../components/ui/SvgIcon/SvgIcon";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { productData } from "../../../../../data/productData";
import ProductCard from "../../../../../features/product/components/ProductCard";
import SliderNavBtn from "../../../../../components/ui/SliderNavBtn/SliderNavBtn";

import "swiper/css";
import "swiper/css/navigation";

function Dashboard() {
  const user = useSelector((state) => state.auth.user) || {};
  // console.log(user);

  const { first_name, last_name, mobile, avatar_url } = user;
  const fullName = [first_name, last_name].filter(Boolean).join(" ");

  return (
    <>
      <Box sx={flexCol({ xs: 2.5, lg: 4 })}>
        <Typography component="h4" sx={sectionTitle}>
          داشبورد
        </Typography>
        <Box sx={dashboardCardContainer}>
          <Box sx={dashboardCard}>
            <Box sx={flexBetween("row")}>
              <Box sx={flexCol("")}>
                <Typography sx={{ fontSize: "18px" }}>{fullName}</Typography>
                <Typography
                  variant="subtitle2"
                  component="span"
                  sx={{ color: "text.secondary" }}
                >
                  {mobile}
                </Typography>
                <Chip color="normal" label="دانشجو" />
              </Box>
              <Box sx={{ width: "96px", height: "96px" }}>
                <Box
                  component="img"
                  alt="پروفایل کاربر"
                  src={avatar_url || default_avatar}
                  sx={dashboardUserImg}
                ></Box>
              </Box>
            </Box>
            <Box sx={flexBox("12px")}>
              <SvgIcon name="course" size={24} />
              <Box sx={flexCol("")}>
                <Typography
                  component="strong"
                  sx={{
                    fontSize: "24px",
                    color: "primary.main",
                    fontWeight: 700,
                  }}
                >
                  1
                </Typography>
                <Typography component="span" variant="caption">
                  دوره تهیه شده
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={dashboardCard}>
            <Box sx={flexBetween("row")}>
              <Typography component="h5">علاقه مندی های شما</Typography>
              <Button sx={{ fontSize: "12px" }}>ویرایش</Button>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={flexCol(1)}>
              <Box sx={flexBetween(1, "row")}>
                <Typography sx={{ lineHeight: "32px" }}>
                  برنامه نویسی موبایل
                </Typography>
                <Button variant="text" sx={{ bgcolor: "menuItemBg" }}>
                  دوره ها
                </Button>
              </Box>
              <Box sx={flexBetween(1, "row")}>
                <Typography sx={{ lineHeight: "32px" }}>
                  توسعه وب و طراحی سایت
                </Typography>
                <Button variant="text" sx={{ bgcolor: "menuItemBg" }}>
                  دوره ها
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={mySuggestedCourses} className="suggested-courses">
          <Box sx={{ ...flexBetween("row") }}>
            <Typography component="h4" sx={sectionTitle}>
              دوره های پیشنهادی
            </Typography>
            <SliderNavBtn />
          </Box>
          <Box sx={{ width: "100%", overflow: "hidden" }}>
            <Swiper
              modules={[Navigation]}
              spaceBetween={20}
              slidesPerView={4.5}
              speed={500}
              navigation={{
                prevEl: ".suggested-courses .swiper-btn-prev",
                nextEl: ".suggested-courses .swiper-btn-next",
              }}
              loop={true}
              breakpoints={{
                300: { slidesPerView: 1, spaceBetween: 20 },
                420: { slidesPerView: 2, spaceBetween: 20 },
                780: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
                1280: { slidesPerView: 3.5, spaceBetween: 20 },
              }}
            >
              {productData.slice(10, 20).map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard itemData={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Dashboard;
