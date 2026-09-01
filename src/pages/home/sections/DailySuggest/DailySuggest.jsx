import { Box, Typography } from "@mui/material";
import { sectionStyle, sectionTitle } from "../../../../styles/globalStyles";
import { dailySuggestImg, dailySuggestImgBox } from "./dailySuggestStyles";
import { daily_suggest } from "../../../../data/imgSource";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../../features/product/components/ProductCard";
import useProducts from "../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../features/product/components/ProductCardSkeleton";

import "swiper/css";

function DailySuggest() {
  const { products, loading } = useProducts();

  const dailySuggestCourses = products.filter((item) =>
    item.tags.includes("suggest"),
  );
  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Typography component="h2" sx={sectionTitle}>
          پیشنهاد روز
        </Typography>
        <Box sx={{ display: "flex", gap: 2.5 }}>
          <Box sx={dailySuggestImgBox}>
            <Box
              component="img"
              sx={dailySuggestImg}
              src={daily_suggest}
              alt="بنر پیشنهاد روز"
            ></Box>
          </Box>
          <Swiper
            spaceBetween={20}
            slidesPerView={4.5}
            speed={1200}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              350: { slidesPerView: 1.5, spaceBetween: 20 },
              600: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : dailySuggestCourses.map((item, i) => (
                  <SwiperSlide key={item.id}>
                    <ProductCard co itemData={item} />
                  </SwiperSlide>
                ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default DailySuggest;
