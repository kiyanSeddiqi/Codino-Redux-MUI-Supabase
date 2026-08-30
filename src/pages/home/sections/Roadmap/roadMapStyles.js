import { flexCol } from "../../../../styles/globalStyles";

export const roadMapCardContainer = (theme) => ({
  ...flexCol(2.5),
  bgcolor: "transparent",
  boxShadow: "none",
  width: "100%",
  maxWidth: "fit-contet",
  [theme.breakpoints.down(480)]: {
    maxWidth: "100%",
  },
});

export const roadMapCardImgBox = {
  width: "100%",
  overflow: "hidden",
  borderRadius: "16px",
  "&:focus": {
    outline: "none",
  },
};

export const roadMapCardImg = {
  borderRadius: "16px",
  height: "100%",
  width: "100%",
  objectFit: "cover",
};

export const roadMapCardContent = {
  ...flexCol(2.5),
  p: 0,
  "&:last-child": { pb: 0 },
  width: "100%",
};

export const roadMapCardStepNum = {
  lineHeight: "36px",
  fontWeight: 700,
  fontSize: {
    xs: "20px",
    md: "24px",
  },
  color: "primary.main",
};

export const roadMapCardTitle = {
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  "&:focus": {
    outline: "none",
  },
};

export const roadMapCardStepText = {
  fontSize: "14px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
};
