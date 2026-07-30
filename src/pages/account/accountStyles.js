import { position } from "stylis";

export const accountSidebar = {
  width: {
    xs: "25%",
    "2xl": "300px",
  },
  display: {
    xs: "none",
    lg: "flex",
  },
  flexDirection: "column",
  bgcolor: "background.default",
  p: 2,
  gap: 2,
  position: "sticky",
  top: "94px",
  height: "100%",
};

export const accountMainbar = {
  flex: 1,
  minWidth: 0,
  p: {
    xs: 2.5,
    lg: 4,
  },

  bgcolor: "background.paper",
};
