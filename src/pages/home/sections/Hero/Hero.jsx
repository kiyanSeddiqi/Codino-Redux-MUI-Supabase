import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import {
  heroBtnWrapper,
  heroContainer,
  heroIconBox,
  heroSliderBox,
  heroSliderImg,
  heroSliderNavBox,
  heroSliderNavBtn,
  heroStats,
  heroStatsText,
  heroText,
  heroTextBox,
  heroTitle,
} from "./heroStyles";
import {
  flexCenter,
  flexCol,
  textPrimary,
  textSecondary,
} from "../../../../styles/globalStyles";
import { ArrowOutward, ChevronLeft, ChevronRight } from "@mui/icons-material";
import SvgIcon from "../../../../components/ui/SvgIcon";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import {
  hero_b_1,
  hero_b_2,
  hero_b_3,
  hero_b_4,
} from "../../../../data/imgSource";

import "swiper/css";
import "swiper/css/autoplay";

const heroImgData = [hero_b_1, hero_b_2, hero_b_3, hero_b_4];

function Hero() {
  return (
    <>
      <Box component="section" sx={heroContainer}>
        <Box sx={heroTextBox}>
          <Box sx={heroText}>
            <Typography sx={textPrimary}>
              از برنامه‌نویسی تا مارکتینگ و هوش مصنوعی!
            </Typography>
            <Box sx={flexCol("14px")}>
              <Typography component="h1" sx={heroTitle}>
                مسیر یادگیری آسون‌تر از چیزیه که فکر می‌کنی!
              </Typography>
              <Typography sx={{ ...textSecondary, lineHeight: "32px" }}>
                هرچیزی که نیاز داری رو برات جمع کردیم: آموزش پایه‌ای، پروژه‌محور
                و با پشتیبانی و مشاوره! فقط کافیه شروع کنی، بقیش با ما.
              </Typography>
              <Box sx={heroBtnWrapper}>
                <Button component={Link} to="/course">
                  مشاهده دوره ها
                  <ArrowOutward sx={{ rotate: "-90deg", fontSize: "20px" }} />
                </Button>
                <Button
                  component={Link}
                  to="/free-courses"
                  color="secondary"
                  variant="contained"
                >
                  شروع سریع و رایگان
                </Button>
              </Box>
            </Box>
          </Box>
          <Box sx={heroStats}>
            <Box sx={heroIconBox}>
              <SvgIcon name="course" />
              <Box sx={heroStatsText}>
                <Typography component="h3">178+</Typography>
                <Typography component="span">دوره تخصصی</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={heroIconBox}>
              <SvgIcon name="clock" />
              <Box sx={heroStatsText}>
                <Typography component="h3">5,000+</Typography>
                <Typography component="span">ساعت آموزش</Typography>
              </Box>
            </Box>
            <Divider orientation="vertical" flexItem />
            <Box sx={heroIconBox}>
              <SvgIcon name="student" />
              <Box sx={heroStatsText}>
                <Typography component="h3">309k+</Typography>
                <Typography component="span">دانشجو</Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={heroSliderBox}>
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={12}
            slidesPerView={1}
            speed={1200}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            centeredSlides={true}
            loop={true}
            style={{ borderRadius: "16px", width: "100%", height: "100%" }}
          >
            {heroImgData?.map((img, i) => (
              <SwiperSlide key={i}>
                <Link to="/">
                  <Box
                    src={img}
                    component="img"
                    alt="بنر آموزش برنامه نویسی"
                    sx={heroSliderImg}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    loading={i === 0 ? "eager" : "lazy"}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <Box sx={heroSliderNavBox}>
            <ButtonGroup sx={heroSliderNavBtn}>
              <Button
                className="swiper-button-next"
                disableRipple
                variant="text"
                sx={flexCenter}
              >
                <ChevronRight sx={{ fontSize: "20px" }} />
              </Button>
              <Divider orientation="vertical" flexItem />
              <Button
                className="swiper-button-prev"
                disableRipple
                variant="text"
                sx={flexCenter}
              >
                <ChevronLeft sx={{ fontSize: "20px" }} />
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Hero;
