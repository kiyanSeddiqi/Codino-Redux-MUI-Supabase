import { flexCol } from "../../../../styles/globalStyles";

export const blogContainer = {
  display: "flex",
  gap: "32px",
};

export const blogRightContainer = {
  width: "50%",
  flexDirection: "column",
  gap: 2.5,
  display: {
    xs: "none",
    lg: "flex",
  },
};

export const blogRightImgBox = {
  aspectRatio: "16 / 9",
  borderRadius: "24px",
  "& > img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "24px",
  },
};

export const blogRightTextBox = {
  ...flexCol("12px"),
  width: "100%",
  px: 2.5,
};

export const blogLeftContainer = {
  display: "flex",
  gap: 2.5,
  justifyContent: "space-between",
  flex: 1,
  flexDirection: {
    xs: "row",
    lg: "column",
  },
  height: "100%",
  overflowX: "auto",
};

export const blogLeftCardBox = {
  display: "flex",
  gap: 2.5,
  flexShrink: 0,
  flexDirection: {
    xs: "column-reverse",
    lg: "row",
  },
  width: {
    xs: "80%",
    sm: "66%",
    lg: "100%",
  },
};

export const blogLeftTextBox = {
  ...flexCol("12px"),
  width: { lg: "50%" },
};

export const blogLeftTitle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  fontWeight: 700,
  fontSize: {
    xs: "14px",
    sm: "16px",
  },
};

export const blogLeftText = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  lineHeight: "32px",
  color: "text.secondary",
  fontSize: {
    xs: "12px",
    sm: "14px",
  },
};

export const blogLeftImgBox = {
  flex: 1,
  aspectRatio: "16 / 9",
};

export const blogLeftImg = {
  width: "100%",
  height: "100%",
  borderRadius: "24px",
  maxHeight: "400px",
};
