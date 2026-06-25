import { Box } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { bannerSliderBox } from "./bannerSliderStyles";
import { Link } from "react-router-dom";
import { bannerData } from "../../../../data/bannerData";

import "swiper/css";
import "swiper/css/pagination";

function BannerSlider() {
  return (
    <>
      <Box
        component="section"
        sx={{
          ...bannerSliderBox,
          mb: {
            xs: 8,
            md: 12.5,
          },
        }}
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          speed={1200}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          loop={true}
        >
          {bannerData.map((item, i) => (
            <SwiperSlide key={i}>
              <Box component={Link} to={item.path}>
                <picture>
                  {item.mobileImgSrc && (
                    <source
                      media="(max-width:768px)"
                      srcSet={item.mobileImgSrc}
                    />
                  )}
                  <img src={item.desktopImgSrc} alt="بنر دوره های آموزشی" />
                </picture>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  );
}

export default BannerSlider;
