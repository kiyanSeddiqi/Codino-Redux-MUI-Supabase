import {
  alignItems,
  bgcolor,
  border,
  borderRadius,
  boxSizing,
  display,
  flexDirection,
  fontSize,
  justifyContent,
  lineHeight,
  maxWidth,
} from "@mui/system";
import { flexCol } from "../../../styles/globalStyles";

export const cardContainer = (theme) => ({
  ...flexCol(2),
  bgcolor: "transparent",
  boxShadow: "none",
  width: "100%",
  maxWidth: "300px",
  [theme.breakpoints.down(480)]: {
    maxWidth: "100%",
  },
  transition: "transform 0.3s ease",
  "&:hover .MuiCardMedia-root": {
    transform: "scale(1.1) rotate(-1deg)",
  },
});

export const cardContent = {
  ...flexCol(2),
  p: 0,
  "&:last-child": { pb: 0 },
  width: "100%",
};

export const cardImgBox = (theme) => ({
  width: "100%",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "20px",
  maxHeight: {
    md: "360px",
  },
});

export const cardImg = (theme) => ({
  borderRadius: "20px",
  height: "100%",
  width: "100%",
  transition: "transform 0.3s ease",
});

export const cardTitleBox = (theme) => ({
  display: "flex",
  width: "100%",
  gap: "12px",
  flexDirection: "column",
});

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

export const cardTitle = (theme) => ({
  fontSize: "14px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 1,
  lineHeight: "20px",
  // minHeight: "40px",
});
