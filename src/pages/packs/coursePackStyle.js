import { flexCol } from "../../styles/globalStyles";

export const gridContainer = {
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

export const cardImgBox = {
  borderRadius: "16px",
  width: "100%",
  aspectRatio: "16 / 9",
};

export const cardImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
  borderRadius: "16px",
};

export const cardTitle = {
  fontWeight: 700,
  fontSize: {
    xs: "16px",
    sm: "18px",
  },
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
};

export const detailContainer = {
  width: {
    xs: "100%",
    lg: "66%",
  },
  mx: "auto",
  ...flexCol(5),
};

export const imageStyle = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
  borderRadius: "8px",
};

export const packDetailTitle = {
  fontSize: "clamp(18px,3vw,36px)",
  fontWeight: 700,
};

export const packDetailList = {
  ...flexCol(7),
  pr: {
    xs: 2.5,
    lg: 10,
  },
  mt: 5,
};

export const packDetailListItem = {
  ...flexCol(4),
  pr: { xs: 2.5, sm: 6 },
  borderRight: 2,
  borderRightColor: "divider",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    right: 0,
    top: "-24px",
    width: "24px",
    height: "24px",
    borderRadius: "100%",
    bgcolor: "primary.main",
    border: 6,
    borderColor: "divider",
    transform: "translateY(-50%)",
    transform: "translateX(50%)",
    zIndex: 10,
  },
};

export const listItemTitleBox = {
  display: "flex",
  alignItems: "center",
  gap: 2,
  "& > p": {
    fontSize: "clamp(22px,3vw,30px)",
    color: "primary.main",
    fontWeight: 700,
  },
  "& > a": {
    transition: "all 0.3s",
    fontSize: {
      xs: "16px",
      md: "18px",
    },
    "&:hover": {
      color: "primary.main",
    },
  },
};

export const packDetailCourseCard = {
  display: "flex",
  flexDirection: {
    xs: "column",
    sm: "row",
  },
  gap: 2.5,
  alignItems: "start",
};

export const courseCardImgBox = {
  width: {
    xs: "100%",
    sm: "25%",
  },
  aspectRatio: 1,
  borderRadius: "8px",
};

export const packDetailEnrollBox = {
  p: {
    xs: 2,
    sm: 3,
    lg: 4,
  },
  border: 1,
  borderRadius: "12px",
  borderColor: "divider",
  ...flexCol(3),
};

export const enrollBoxAlert = (theme) => ({
  display: "flex",
  alignItems: "center",
  borderRadius: "12px",
  p: {
    xs: 1.5,
    sm: 2,
  },
  color: theme.palette.mode === "dark" ? "primary.light" : "primary.main",
  bgcolor: "bgAccent",
  lineHeight: "32px",
  "& > p": {
    fontSize: "14px",
  },
});
