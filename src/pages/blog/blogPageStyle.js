export const blogContainer = {
  display: "flex",
  flexDirection: { xs: "column", lg: "row" },
  gap: 4,
};

export const blogGridContainer = {
  display: {
    xs: "flex",
    sm: "grid",
  },
  flexDirection: "column",
  gridTemplateColumns: "repeat(2,minmax(0,1fr))",
  columnGap: 2.5,
  rowGap: {
    xs: 2.5,
    lg: 4,
  },
};

export const blogCardImgBox = {
  width: "100%",
  borderRadius: "12px",
  aspectRatio: "16 / 9",
};

export const blogCardImg = {
  width: "100%",
  height: "100%",
  borderRadius: "12px",
  objectFit: "cover",
  display: "block",
};

export const blogCardText = {
  color: "text.secondary",
  lineHeight: "32px",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
};
