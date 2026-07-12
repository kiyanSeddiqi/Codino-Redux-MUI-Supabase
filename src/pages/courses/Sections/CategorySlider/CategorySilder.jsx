import {
  flexBetween,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "swiper/css";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn.jsx";
import { courseCategoryCard } from "../../../home/Sections/Category/courseCategoryStyles.js";
import { courseCategoryCardTitle } from "../../coursesStyles.js";
import { categoryData } from "../../../../data/categoryData.js";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon.jsx";
import { Box, Typography } from "@mui/material";

function CategorySilder() {
  return (
    <>
      <Box sx={flexCol(2.5)} component="section" className="courses-section">
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h4" sx={sectionTitle}>
            دسته بندی ها
          </Typography>
          <SliderNavBtn />
        </Box>
      </Box>
      <Box>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3.5}
          speed={500}
          navigation={{
            prevEl: ".courses-section .swiper-btn-prev",
            nextEl: ".courses-section .swiper-btn-next",
          }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1.5, spaceBetween: 20 },
            400: { slidesPerView: 2, spaceBetween: 20 },
            480: { slidesPerView: 2.5, spaceBetween: 20 },
            600: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4.5, spaceBetween: 20 },
            1536: { slidesPerView: 5.2, spaceBetween: 20 },
          }}
        >
          {categoryData.map((item, i) => (
            <SwiperSlide key={item.id}>
              <Box
                key={i}
                component={Link}
                to={`${item.slug}`}
                sx={courseCategoryCard}
              >
                <SvgIcon name={item.iconName} size={28} />
                <Typography component="span" sx={courseCategoryCardTitle}>
                  {item.title}
                </Typography>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default CategorySilder;
