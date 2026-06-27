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

export const flexBox = (gap = 0) => ({
  display: "flex",
  alignItems: "center",
  gap,
});

export const sectionStyle = {
  mb: {
    xs: 8,
    md: 12.5,
  },
  ...flexCol(2.5),
};

export const sectionTitle = {
  fontSize: {
    lg: "24px",
    xs: "20px",
  },
  fontWeight: "600",
};

export const textPrimary = {
  color: "primary.main",
};

export const textSecondary = {
  color: "text.secondary",
};
