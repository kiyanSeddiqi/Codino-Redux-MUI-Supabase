import {
  flexBetween,
  flexCol,
  sectionTitle,
} from "../../../../styles/globalStyles.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";

import "swiper/css";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn.jsx";
import { courseCategoryCard } from "../../../home/Sections/Category/courseCategoryStyles.js";
import { courseCategoryCardTitle } from "../../coursesStyles.js";
import { categoryData } from "../../../../data/categoryData.js";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon.jsx";
import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";

function CategorySilder() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const swiperRef = useRef(null);

  useEffect(() => {
    if (!swiperRef.current) return;

    if (slug) {
      const activeIndex = categoryData.findIndex(
        (item) =>
          item.slug === slug ||
          item.children.some((child) => child.slug === slug),
      );

      if (activeIndex !== -1) {
        const targetIndex = Math.max(activeIndex - 2, 0);
        swiperRef.current.slideToLoop(targetIndex);
      }
    } else {
      swiperRef.current.slideToLoop(0);
    }
  }, [slug]);

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
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={3.5}
          speed={700}
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
          {categoryData.map((item, i) => {
            const isActive =
              item.slug === slug ||
              item.children.some((child) => child.slug === slug);
            return (
              <SwiperSlide key={item.id}>
                <Box
                  key={i}
                  onClick={() =>
                    navigate(item.slug ? `/courses/${item.slug}` : "/courses")
                  }
                  sx={(theme) => ({
                    ...courseCategoryCard(theme, ""),
                    ...(isActive && {
                      bgcolor: "menuItemBg",
                      color:
                        theme.palette.mode === "dark"
                          ? "text.primary"
                          : "primary.main",
                      "& svg": {
                        color:
                          theme.palette.mode === "dark"
                            ? "#fff !important"
                            : "primary.main",
                      },
                      borderColor: "primary.main",
                    }),
                  })}
                >
                  <SvgIcon name={item.iconName} size={28} />
                  <Typography component="span" sx={courseCategoryCardTitle}>
                    {item.title}
                  </Typography>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </>
  );
}

export default CategorySilder;
