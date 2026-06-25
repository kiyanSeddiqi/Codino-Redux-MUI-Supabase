export const bannerSliderBox = {
  borderRadius: "16px",
  overflow: "hidden",
  "& .swiper": {
    width: "100%",
    height: "100%",
  },
  "& img": {
    display: "block",
    width: "100%",
    height: "auto",
    objectFit: "cover",
  },

  "& .swiper-pagination-bullet": {
    backgroundColor: "#6700E5",
    opacity: 0.5,
    borderRadius: "5px",
    transition: "all .4s ease",
  },

  "& .swiper-pagination-bullet-active": {
    opacity: 1,
    width: "26px",
  },
};
