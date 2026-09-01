import { flexCol } from "../../../styles/globalStyles";

export const cardContainer = {
  ...flexCol(2),
  bgcolor: "transparent",
  boxShadow: "none",
  width: "100%",
  transition: "transform 0.3s ease",
  "&:hover .MuiCardMedia-root": {
    transform: "scale(1.1) rotate(-1deg)",
  },
};

export const cardContent = {
  ...flexCol(1),
  p: 0,
  "&:last-child": { pb: 0 },
  width: "100%",
};

export const cardImgBox = {
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "20px",
  maxHeight: {
    md: "360px",
  },
  "&:focus": { outline: "none" },
};

export const cardImg = {
  borderRadius: "20px",
  height: "100%",
  width: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
  display: "block",
};

export const cardTitleBox = {
  ...flexCol("12px"),
  width: "100%",
};

export const cardLevelBadge = (theme) => ({
  borderRadius: 2,
  p: "4px 8px",
  color: theme.palette.mode === "dark" ? "primary.light" : "primary.main",
  bgcolor: "menuItemBg",
  fontSize: "12px",
});

export const cardStatusBadge = {
  borderRadius: 2,
  p: "4px",
  display: "flex",
};

export const cardTitle = {
  fontSize: "14px",
  fontWeight: 500,
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  lineHeight: "20px",
  "&:focus": { outline: "none" },
};

export const featuredCardContainer = (theme) => ({
  display: "flex",
  alignItems: "start",
  gap: 2,
  pb: {
    xs: 2,
    md: 0,
  },
  flexShrink: 0,
  flexDirection: {
    xs: "row",
    md: "column",
  },
  [theme.breakpoints.down(400)]: {
    flexDirection: "column",
    borderBottom: 0,
  },
  bgcolor: "transparent",
  boxShadow: "none",
  width: "100%",
  transition: "transform 0.3s ease",
  "&:hover .MuiCardMedia-root": {
    transform: "scale(1.1) rotate(-1deg)",
  },
  borderRadius: 0,
  borderBottom: { md: 0, xs: "1px solid #494b55" },
});

export const featuredCardImgBox = (theme) => ({
  width: "100%",
  flexShrink: 0,
  [theme.breakpoints.down(768)]: {
    width: "185px",
  },
  [theme.breakpoints.down(600)]: {
    width: "140px",
  },
  [theme.breakpoints.down(400)]: {
    width: "100%",
  },
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "20px",
  "&:focus": { outline: "none" },
});
