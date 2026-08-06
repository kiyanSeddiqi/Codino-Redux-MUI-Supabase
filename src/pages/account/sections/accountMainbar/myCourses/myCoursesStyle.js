import { flexBox, flexCol } from "../../../../../styles/globalStyles";

export const myCoursesContainer = {
  ...flexCol("32px"),
  pb: "56px",
};

export const tabContainer = {
  ...flexBox("12px"),
  overflowX: "auto",
  flexWrap: "nowrap",
  whiteSpace: "nowrap",
};

export const myCoursesTabBtn = {
  borderRadius: "6px",
  p: "8px 10px",
  flexShrink: 0,
};

export const cardContainer = {
  ...flexCol(4),
  "& > *:not(:last-child)": {
    pb: 4,
    borderBottom: 1,
    borderColor: "divider",
  },
};

export const myCourseCardBox = {
  display: "flex",
  alignItems: "start",
  gap: 2,
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

export const cardImgBox = {
  width: {
    xs: "100%",
    md: "226px",
  },
  aspectRatio: "1",
  borderRadius: "12px",
};

export const cardImg = {
  borderRadius: "12px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export const cardTextContainer = {
  ...flexCol(2),
  width: "100%",
  justifyContent: "space-between",
};
