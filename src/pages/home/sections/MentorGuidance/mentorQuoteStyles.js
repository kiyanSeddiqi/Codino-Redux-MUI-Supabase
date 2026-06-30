import { flexBox, flexCol } from "../../../../styles/globalStyles";

export const quoteContainer = {
  width: "100%",
  display: "flex",
  alignItems: "stretch",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  gap: 2.5,
  "& .mentor-swiper .swiper-wrapper": {
    alignItems: "stretch",
  },
  "& .mentor-swiper .swiper-slide": {
    height: "auto",
    display: "flex",
  },
};

export const quoteCard = {
  border: 1,
  borderRadius: "24px",
  borderColor: "divider",
  position: "relative",
  p: {
    xs: "20px",
    lg: "34px 30px 30px",
  },
  fontSize: {
    xs: "14px",
    sm: "16px",
  },
  "& p": {
    lineHeight: "32px",
  },
  height: "100%",
  boxSizing: "border-box",
  cursor: "pointer",
};

export const quoteCardContent = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  justifyContent: "space-between",
  p: 0,
  "&:last-child": {
    pb: 0,
  },
  height: "100%",
};

export const quoteIcon = {
  position: "absolute",
  top: -18,
  right: -8,
  opacity: 0.15,
  color: "primary.main",
  fontSize: "98px",
};
