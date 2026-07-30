import { flexBox, flexCol } from "../../../../../styles/globalStyles";

export const myCoursesContainer = {
  ...flexCol("32px"),
  pb: "56px",
};

export const tabConainer = {
  ...flexBox({ xs: 2, lg: 4 }),
};

export const myCoursesTabBtn = {
  borderRadius: "6px",
  p: "8px 10px",
  color: "text.primary",
  borderColor: "divider",
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
  gap: 2,
  flexDirection: {
    xs: "column",
    md: "row",
  },
  alignItems: "start",
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
  flex: 1,
  justifyContent: "space-between",
};
