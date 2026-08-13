import { Box, Typography } from "@mui/material";
import { mySuggestedCourses } from "./dashboardStyle";
import { flexBetween, sectionTitle } from "../../../../../styles/globalStyles";
import SliderNavBtn from "../../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import ProductCard from "../../../../../features/product/components/ProductCard";
import useProducts from "../../../../../features/product/hooks/useProducts";
import ProductCardSkeleton from "../../../../../features/product/components/ProductCardSkeleton";

import "swiper/css";
import "swiper/css/navigation";

function MySuggestedCourses({ favoriteList }) {
  const { products, loading } = useProducts();

  const coursesByFavoriteCat = favoriteList.map((item) => {
    const courses = products.filter((p) => p.categories?.includes(item.slug));
    return courses.slice(0, 3);
  });

  const relatedCourses = [
    ...new Map(
      coursesByFavoriteCat.flat().map((course) => [course.id, course]),
    ).values(),
  ];

  const canLoop = relatedCourses.length > 4;

  return (
    <>
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
            loop={canLoop}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              350: { slidesPerView: 1.5, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 3.5, spaceBetween: 20 },
            }}
          >
            {loading
              ? Array.from({ length: 5 }).map((_, index) => (
                  <SwiperSlide key={index}>
                    <ProductCardSkeleton />
                  </SwiperSlide>
                ))
              : relatedCourses.length > 0
                ? relatedCourses.map((item) => (
                    <SwiperSlide key={item.id}>
                      <ProductCard itemData={item} />
                    </SwiperSlide>
                  ))
                : products.slice(4, 12).map((item) => (
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

export default MySuggestedCourses;
