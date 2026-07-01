import { Box, Typography } from "@mui/material";
import { sectionStyle, sectionTitle } from "../../../../styles/globalStyles";
import { dailySuggestImg, dailySuggestImgBox } from "./dailySuggestStyles";
import { productData } from "../../../../data/productData";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../../../features/product/components/ProductCard";

import "swiper/css";
import { daily_suggest } from "../../../../data/imgSource";

function DailySuggest() {
  const dailyProducts = productData.filter((item) =>
    item.tags.includes("daily"),
  );
  return (
    <>
      <Box component="section" sx={sectionStyle}>
        <Typography component="h4" sx={sectionTitle}>
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
              300: { slidesPerView: 1, spaceBetween: 20 },
              420: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1280: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
          >
            {dailyProducts.map((item, i) => (
              <SwiperSlide key={i}>
                <ProductCard itemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default DailySuggest;
