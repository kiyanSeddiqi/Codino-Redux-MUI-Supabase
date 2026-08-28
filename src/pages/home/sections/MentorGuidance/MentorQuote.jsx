import { Box, Card, CardContent, Typography } from "@mui/material";
import { sectionStyle, sectionTitle } from "../../../../styles/globalStyles";
import {
  quoteCard,
  quoteCardContent,
  quoteContainer,
  quoteIcon,
} from "./mentorQuoteStyles";
import { mentorData } from "../../../../data/mentorData";
import { FormatQuote } from "@mui/icons-material";
import MentorHelp from "./MentorHelp";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

function MentorQuote() {
  return (
    <>
      <Box sx={sectionStyle} component="section">
        <Typography component="h2" sx={sectionTitle}>
          پیشنهاد اساتید کدینو برای شروع!
        </Typography>
        <Box sx={quoteContainer}>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            autoHeight={false}
            slidesPerView={3}
            speed={1000}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              300: { slidesPerView: 1, spaceBetween: 20 },
              600: { slidesPerView: 1.5, spaceBetween: 20 },
              780: { slidesPerView: 2, spaceBetween: 20 },
              1280: { slidesPerView: 3, spaceBetween: 20 },
            }}
            loop={true}
            style={{
              borderRadius: "16px",
              width: "100%",
            }}
            className="mentor-swiper"
          >
            {mentorData.map((item, i) => (
              <SwiperSlide key={i}>
                <Card key={i} sx={quoteCard}>
                  <FormatQuote sx={quoteIcon} />
                  <CardContent sx={quoteCardContent}>
                    <Typography variant="body1">{item.text}</Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "primary.main", fontWeight: 600 }}
                    >
                      {item.mentorName}
                    </Typography>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          <MentorHelp />
        </Box>
      </Box>
    </>
  );
}

export default MentorQuote;
