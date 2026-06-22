export const flexBetween = (gap = 0, flexDir = "row") => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap,
  flexDirection: flexDir,
});

export const flexCenter = (gap = 0, flexDir = "row") => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap,
  flexDirection: flexDir,
});

export const flexCol = (gap = 0) => ({
  display: "flex",
  flexDirection: "column",
  gap,
});

export const logo = (theme) => ({
  width: "95px",
  height: "31px",
  display: "flex",
  [theme.breakpoints.down("md")]: {
    width: "80px",
    height: "auto",
  },
});
