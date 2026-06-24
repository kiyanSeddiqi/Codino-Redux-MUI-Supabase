import { Box, Typography } from "@mui/material";
import { recentUpdatesContainer } from "./recentUpdatesStyles";
import { flexBetween, flexCol } from "../../../../styles/globalStyles";
import SliderNavBtn from "../../../../components/ui/SliderNavBtn/SliderNavBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { productData } from "../../../../data/productData";
import ProductCard from "../../../../features/product/components/ProductCard";

import "swiper/css";
import "swiper/css/navigation";

function RecentUpdates() {
  return (
    <>
      <Box component="section" sx={{ ...flexCol(2.5), mb: 12.5 }}>
        <Box sx={{ ...flexBetween("row") }}>
          <Typography
            component="h5"
            sx={{ fontSize: { xs: "20px", lg: "24px" }, fontWeight: 600 }}
          >
            آخرین به روزرسانی ها
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
              480: { slidesPerView: 2, spaceBetween: 20 },
              780: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
              1280: { slidesPerView: 4.5, spaceBetween: 20 },
            }}
          >
            {productData.map((item, i) => (
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

export default RecentUpdates;
