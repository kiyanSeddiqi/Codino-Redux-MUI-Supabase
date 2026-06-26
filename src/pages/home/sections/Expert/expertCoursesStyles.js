export const expertContainer = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  width: "100%",
  flexDirection: {
    xs: "column",
    md: "row",
  },
  gap: 2.5,
};

export const expertCardContainer = (theme) => ({
  display: "flex",
  alignItems: "center",
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
  [theme.breakpoints.down(420)]: {
    flexDirection: "column",
  },
  bgcolor: "transparent",
  boxShadow: "none",
  width: "100%",
  maxWidth: {
    xs: "100%",
    md: "294px",
  },
  transition: "transform 0.3s ease",
  "&:hover .MuiCardMedia-root": {
    transform: "scale(1.1) rotate(-1deg)",
  },
});

export const expertCardImgBox = (theme) => ({
  width: "100%",
  maxWidth: {
    xs: "200px",
    md: "300px",
  },
  maxHeight: {
    xs: "200px",
    md: "100%",
  },
  [theme.breakpoints.down(420)]: {
    maxWidth: "100%",
    maxHeight: "100%",
  },

  aspectRatio: "1 / 1",
  overflow: "hidden",
  borderRadius: "20px",
});
