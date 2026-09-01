import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import useProducts from "../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../features/product/components/ProductCardSkeleton";
import {
  bannerBtnWrapper,
  bannerContainer,
  bannerImg,
  bannerText,
  bannerTextBox,
} from "./codinoPlusStyles";
import { ArrowOutward } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { platforms } from "../../../../data/imgSource";
import { Box, Button, Typography } from "@mui/material";
import {
  flexBetween,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import ProductCard from "../../../../features/product/components/ProductCard";

import "swiper/css";
import "swiper/css/navigation";

function CodinoPlus() {
  const { products, loading } = useProducts();

  const plusCourses = products.filter((item) => item.tags.includes("plus"));

  const canLoop = plusCourses.length > 4;
  return (
    <>
      <Box sx={bannerContainer}>
        <Box sx={bannerTextBox}>
          <Typography
            component="h2"
            sx={{ fontSize: { xs: 20, lg: 24 }, fontWeight: 700 }}
          >
            کدینو پلاس؛ یادگیری حرفه‌ای با دوره‌های بین‌المللی!
          </Typography>
          <Typography sx={bannerText}>
            یادگیری حرفه‌ای حالا در دسترس‌تر از همیشه است—با اشتراک کدینو پلاس،
            آموزش جهانی رو به زبان خودت تجربه کن.
          </Typography>
          <Box sx={bannerBtnWrapper}>
            <Button component={Link} to="/courses?filter=plusCourse">
              مشاهده دوره ها
              <ArrowOutward sx={{ rotate: "-90deg", fontSize: "20px" }} />
            </Button>
            <Button component={Link} to="/" color="secondary">
              تهیه اشتراک پلاس
            </Button>
          </Box>
        </Box>
        <Box
          component="img"
          sx={bannerImg}
          src={platforms}
          loading="lazy"
          alt="پلتفرم های آموزشی"
        ></Box>
      </Box>

      <Box
        component="section"
        className="codino-plus__slider"
        sx={sectionStyle}
      >
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h2" sx={sectionTitle}>
            آخرین دوره های کدینو پلاس
          </Typography>
          <SliderNavBtn />
        </Box>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4.5}
          speed={500}
          navigation={{
            prevEl: ".codino-plus__slider .swiper-btn-prev",
            nextEl: ".codino-plus__slider .swiper-btn-next",
          }}
          loop={canLoop}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            350: { slidesPerView: 1.5, spaceBetween: 20 },
            600: { slidesPerView: 2, spaceBetween: 20 },
            780: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 20 },
            1280: { slidesPerView: 4.5, spaceBetween: 20 },
          }}
          style={{ width: "100%" }}
        >
          {loading
            ? Array.from({ length: 5 }).map((_, index) => (
                <SwiperSlide key={index}>
                  <ProductCardSkeleton />
                </SwiperSlide>
              ))
            : plusCourses.map((item, i) => (
                <SwiperSlide key={item.id}>
                  <ProductCard co itemData={item} />
                </SwiperSlide>
              ))}
        </Swiper>
      </Box>
    </>
  );
}

export default CodinoPlus;
