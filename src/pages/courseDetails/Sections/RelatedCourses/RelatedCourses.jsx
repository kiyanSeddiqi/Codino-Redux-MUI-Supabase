import { Box, Typography } from "@mui/material";
import {
  flexBetween,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";

function RelatedCourses() {
  const tempCategory = "frontend";
  const relatedCourses = productData.filter((item) =>
    item.categories.includes(tempCategory),
  );
  return (
    <>
      <Box
        component="section"
        sx={flexCol(2.5)}
        className="relatedCourses-section"
      >
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h4" sx={sectionTitle}>
            دوره های مرتبط
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
              prevEl: ".relatedCourses-section .swiper-btn-prev",
              nextEl: ".relatedCourses-section .swiper-btn-next",
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
            {relatedCourses.map((item, i) => (
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

export default RelatedCourses;
