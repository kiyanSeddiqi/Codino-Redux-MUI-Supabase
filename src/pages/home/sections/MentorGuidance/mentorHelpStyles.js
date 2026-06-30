import { flexCol } from "../../../../styles/globalStyles";

export const CTAContainer = {
  p: "40px 32px",
  borderRadius: "24px",
  bgcolor: "menuItemBg",
  color: "primary.main",
  width: {
    xs: "100%",
    lg: "32%",
  },
};

export const cardContent = (theme) => ({
  ...flexCol("20px"),
  p: 0,
  "&:last-child": { pb: 0 },
  height: "100%",
  color: theme.palette.mode === "dark" ? "primary.light" : "primary.main",
});

export const avatarContainer = {
  "& .MuiAvatar-root": {
    width: 50,
    height: 50,
    borderColor: "primary.main",
  },
};
