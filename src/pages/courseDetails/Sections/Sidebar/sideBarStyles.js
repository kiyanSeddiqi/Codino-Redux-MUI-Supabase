import { flexBox, flexCol } from "../../../../styles/globalStyles";

export const sidebarContainer = {
  ...flexCol(2.5),
  position: "sticky",
  top: "110px",
  width: "100%",
};

export const sidebarHeaderBox = {
  display: {
    xs: "flex",
    md: "none",
  },
  flexDirection: "column",
  gap: 2,
};
export const sidebarHeaderTitle = {
  fontSize: {
    xs: "20px",
    lg: "24px",
  },
  fontWeight: 600,
};

export const sidebarImgBox = {
  position: "relative",
  borderRadius: "16px",
  bgcolor: "divider",
  width: "100%",
  placeItems: "center",
  aspectRatio: "1 / 1",
  overflow: "hidden",
  cursor: "pointer",
};

export const sidebarImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export const imgBackdrop = {
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  backdropFilter: "brightness(75%)",
};

export const sidebarinfoBox = {
  ...flexCol(2.5),
  p: {
    xs: 2,
    lg: 2.5,
  },
  borderRadius: "16px",
  border: 1,
  borderColor: "divider",
};

export const sidebarGemBox = {
  ...flexBox(1),
  "& span": {
    fontSize: "14px",
  },
  p: {
    xs: "16px",
    xl: "16px 20px",
  },
  border: 1,
  borderColor: "divider",
  borderRadius: "16px",
  flexWrap: "wrap",
};
