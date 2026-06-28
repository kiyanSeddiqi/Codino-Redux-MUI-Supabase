import { Box, Typography } from "@mui/material";
import {
  flexBetween,
  flexCol,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../../../features/product/components/ProductCard";
import { productData } from "../../../../data/productData";

import "swiper/css";

function BestSellers() {
  const bestSellerProducts = productData.filter((item) =>
    item.tags.includes("best-seller"),
  );
  return (
    <>
      <Box
        component="section"
        className="bestSellers-section"
        sx={sectionStyle}
      >
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h4" sx={sectionTitle}>
            پر فروش ترین ها
          </Typography>
          <SliderNavBtn />
        </Box>
        <Box>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4.5}
            speed={500}
            navigation={{
              prevEl: ".bestSellers-section .swiper-btn-prev",
              nextEl: ".bestSellers-section .swiper-btn-next",
            }}
            loop={true}
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 20 },
              420: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
          >
            {bestSellerProducts.map((item, i) => (
              <SwiperSlide key={item.id}>
                <ProductCard itemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default BestSellers;
