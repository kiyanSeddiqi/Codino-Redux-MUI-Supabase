import { flexBox, flexCol } from "../../styles/globalStyles";

export const roadmapGridContainer = {
  width: "100%",
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1,minmax(0 ,1fr))",
    md: "repeat(2,minmax(0 ,1fr))",
    lg: "repeat(3,minmax(0 ,1fr))",
  },
  columnGap: 4,
  rowGap: 2.5,
};

export const roadmapCardImgBox = {
  borderRadius: "16px",
};

export const roadmapCardImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right",
  display: "block",
  borderRadius: "16px",
};

export const roadmapCardTitle = {
  fontWeight: 700,
  fontSize: {
    xs: "16px",
    sm: "18px",
  },
};

export const detailContainer = {
  width: {
    xs: "100%",
    lg: "66%",
  },
  mx: "auto",
  ...flexCol(5),
};

export const mentorInfoBox = {
  ...flexBox(2),
  width: "100%",
  py: "10px",
  borderTop: 1,
  borderBottom: 1,
  borderColor: "divider",
};

export const roadmapDetailText = {
  lineHeight: {
    xs: "28px",
    sm: "32px",
  },
  mb: 1,
  textAlign: "justify",
  fontSize: {
    xs: "14px",
    sm: "16px",
  },
};

export const roadMapDetailImg = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "8px",
};

export const selectedText = (theme) => ({
  bgcolor: "primary.main",
  color: theme.palette.mode === "dark" ? "secondary.contrastText" : "#fff",
});
