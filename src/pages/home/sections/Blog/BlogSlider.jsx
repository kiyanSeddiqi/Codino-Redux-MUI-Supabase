import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { blogSliderData } from "../../../../data/blogSliderData";

import "swiper/css";
import "swiper/css/navigation";

function BlogSlider() {
  const theme = useTheme();
  const isBelowLg = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <>
      <Box sx={flexCol(2.5)} className="blog-slider">
        <Box sx={flexBetween(1, "row")}>
          <Typography sx={{ fontWeight: 600 }}>مقاله های محبوب</Typography>
          <SliderNavBtn />
        </Box>
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Swiper
            modules={[Navigation]}
            key={isBelowLg ? "horizontal" : "vertical"}
            direction={isBelowLg ? "horizontal" : "vertical"}
            spaceBetween={20}
            navigation={{
              prevEl: ".blog-slider .swiper-btn-prev",
              nextEl: ".blog-slider .swiper-btn-next",
            }}
            loop={blogSliderData.length > 3}
            breakpoints={{
              0: { slidesPerView: 1 },
              400: { slidesPerView: 1.5 },
              600: { slidesPerView: 2.5 },
              1024: { slidesPerView: 3 },
            }}
            style={{
              width: "100%",
              height: isBelowLg ? "auto" : "375px",
            }}
          >
            {blogSliderData.map((item) => (
              <SwiperSlide
                key={item.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: isBelowLg ? "column-reverse" : "row",
                  gap: "16px",
                }}
              >
                <Box
                  sx={{
                    ...flexCol("10px"),
                    width: isBelowLg ? "100%" : "calc(50% - 8px)",
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{
                      overflow: { xs: "hidden", lg: "visible" },
                      whiteSpace: { xs: "nowrap", lg: "normal" },
                      textOverflow: { xs: "ellipsis", lg: "clip" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {item.description}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: isBelowLg ? "100%" : "calc(50% - 8px)",
                    aspectRatio: "16/9",
                    borderRadius: "8px",
                  }}
                >
                  <Box
                    component="img"
                    alt="بنر بلاگ"
                    src={item.imgUrl}
                    loading="lazy"
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default BlogSlider;
