import { Box, Typography } from "@mui/material";
import {
  flexBetween,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../../../features/product/components/ProductCard";
import ProductCardSkeleton from "../../../../features/product/components/ProductCardSkeleton";

function RelatedCourses({ sameCategory, currentProductId, products, loading }) {
  const relatedCourses = products.filter(
    (item) =>
      item.id !== currentProductId &&
      sameCategory.some((cat) => item?.categories.includes(cat)),
  );

  const canLoop = relatedCourses.length > 4;
  console.log(sameCategory);

  if (relatedCourses.length === 0) return;
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
          {canLoop && <SliderNavBtn />}
        </Box>
        <Box>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4.5}
            speed={500}
            loop={canLoop}
            navigation={{
              prevEl: ".relatedCourses-section .swiper-btn-prev",
              nextEl: ".relatedCourses-section .swiper-btn-next",
            }}
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 20 },
              420: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : relatedCourses.map((item, i) => (
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

export default RelatedCourses;
