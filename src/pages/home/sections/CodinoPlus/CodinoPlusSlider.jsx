import { Box, Typography } from "@mui/material";
import {
  flexBetween,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../../../features/product/components/ProductCard";
import useProducts from "../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../features/product/components/ProductCardSkeleton";

import "swiper/css";
import "swiper/css/navigation";

function CodinoPlusSlider() {
  const { products, loading } = useProducts();

  const plusCourses = products.filter((item) => item.tags.includes("plus"));

  const canLoop = plusCourses.length > 4;
  return (
    <>
      <Box
        component="section"
        className="codino-plus__slider"
        sx={sectionStyle}
      >
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h4" sx={sectionTitle}>
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
            300: { slidesPerView: 1, spaceBetween: 20 },
            420: { slidesPerView: 2, spaceBetween: 20 },
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

export default CodinoPlusSlider;
