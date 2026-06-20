import { Padding } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import { position } from "stylis";

export const appBar = (theme) => ({
  borderBottom: 1,
  borderColor: theme.palette.divider,
  minHeight: "96px",
  py: 2.5,
  position: "static",
  bgcolor: theme.palette.background.paper,
  flexDirection: "row",
  color: theme.palette.text.primary,
  boxShadow: "none",
});

export const toolBar = {
  maxWidth: "1660px",
  mx: "auto",
  px: 4,
  width: "100%",
  minHeight: "0 !important",
  justifyContent: "space-between",
};

export const navWrapper = {
  display: "flex",
  alignItems: "center",
  gap: { xs: 1, lg: 2.5 },
};

export const themeBtn = (theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "51px",
  height: "30px",
  borderRadius: "50px",
  position: "relative",
  padding: "5px",
  cursor: "pointer",
  bgcolor: "divider",
});

export const themeBall = (theme) => ({
  position: "absolute",
  left: "5px",
  top: "4px",
  borderRadius: "50%",
  width: "22px",
  height: "22px",
  // bgcolor: theme.palette.secondary.main,
  bgcolor: theme.palette.background.default,
  transform:
    theme.palette.mode === "dark" ? "translateX(20px)" : "translateX(0)",
  transition: "transform 0.2s linear",
});

export const logo = {
  width: "95px",
  height: "31px",
  display: "flex",
};
export const categoryBtn = (theme) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.divider,
  gap: 1,
});

export const coursesMenu = (theme) => ({
  padding: 2.5,
  borderRadius: "10px",
  border: 1,
  borderColor: "divider",
  mt: 0.5,
});

export const coursesList = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  width: "300px",
};
export const coursesListScrollable = {
  ...coursesList,
  maxHeight: "63svh",
  overflowY: "auto",
  scrollbarWidth: "none",
  gap: "12px",
};

export const menuDivider = {
  bgcolor: "divider",
  mx: "8px",
  width: "1px",
  height: "63svh",
};
