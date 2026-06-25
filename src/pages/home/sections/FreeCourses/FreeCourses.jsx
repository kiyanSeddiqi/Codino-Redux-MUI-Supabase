import { Box, Typography } from "@mui/material";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../../../features/product/components/ProductCard";
import { productData } from "../../../../data/productData";

import "swiper/css";

function FreeCourses() {
  const freeProducts = productData.filter((item) => item.price === 0);
  return (
    <>
      <Box
        component="section"
        sx={{
          ...flexCol(2.5),
          mb: {
            xs: 8,
            md: 12.5,
          },
        }}
      >
        <Box sx={{ ...flexBetween("row") }}>
          <Typography
            component="h4"
            sx={{ fontSize: { xs: "20px", lg: "24px" }, fontWeight: 600 }}
          >
            دوره های رایگان
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
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
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
            {freeProducts.map((item, i) => (
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

export default FreeCourses;
