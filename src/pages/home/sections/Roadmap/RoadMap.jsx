import { Box, Typography } from "@mui/material";
import {
  flexBetween,
  sectionStyle,
  sectionTitle,
} from "../../../../styles/globalStyles";
import RoadMapCard from "./RoadMapCard";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { roadMapData } from "../../../../data/roadMapData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

function RoadMap() {
  return (
    <>
      <Box sx={sectionStyle} component="section" className="roadMap-section">
        <Box sx={{ ...flexBetween("row") }}>
          <Typography component="h4" sx={sectionTitle}>
            مسیرهای یادگیری
          </Typography>
          <SliderNavBtn />
        </Box>
        <Box>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            speed={1000}
            navigation={{
              prevEl: ".roadMap-section .swiper-btn-prev",
              nextEl: ".roadMap-section .swiper-btn-next",
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 20 },
              480: { slidesPerView: 2, spaceBetween: 16 },
              1024: { slidesPerView: 3, spaceBetween: 16 },
            }}
          >
            {roadMapData.map((item, i) => (
              <SwiperSlide key={item.id}>
                <RoadMapCard itemData={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>
    </>
  );
}

export default RoadMap;
