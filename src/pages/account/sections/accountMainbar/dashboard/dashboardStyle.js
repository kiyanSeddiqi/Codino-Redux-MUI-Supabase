import { flexCol } from "../../../../../styles/globalStyles";

export const dashboardCardContainer = {
  display: "flex",
  alignItems: "flex-start",
  gap: { xs: 2, lg: 4 },
  flexDirection: {
    xs: "column",
    md: "row",
  },
};

export const dashboardCard = {
  p: 2.5,
  border: 1,
  borderColor: "divider",
  borderRadius: 2,
  ...flexCol(1.5),
  width: "100%",
  minHeight: "215px",
};

export const userFavoriteListContainer = {
  ...flexCol(1),
  maxHeight: "88px",
  overflowY: "auto",
  pl: 1,
  scrollbarWidth: "auto",
  "&::-webkit-scrollbar": {
    width: "6px",
    mr: 1,
  },
  "&::-webkit-scrollbar-track": {
    bgcolor: "bgAccent",
  },
  "&::-webkit-scrollbar-thumb": {
    bgcolor: "primary.main",
    borderRadius: "10px",
  },
};

export const mySuggestedCourses = {
  ...flexCol(2.5),
  mt: 2.5,
};

export const favoriteListDialog = {
  "& .MuiDialog-paper": {
    ...flexCol(2),
    p: 2,
    borderRadius: "8px",
    bgcolor: "background.default",
    m: 0,
    width: { xs: "85vw", sm: "fit-content" },
    maxHeight: {
      xs: "60svh",
      sm: "90svh",
    },
  },

  "& .MuiBackdrop-root": {
    backdropFilter: "blur(6px)",
  },
};

export const favoriteListTitle = {
  fontSize: { xs: "16px", sm: "18px" },
  fontWeight: 600,
  p: 0,
};

export const favoriteListGrid = {
  display: "grid",
  gridTemplateColumns: {
    xs: "repeat(1, minmax(0, 1fr))",
    sm: "repeat(2, minmax(0, 1fr))",
  },
  gap: "10px",
};

export const favoriteListBtn = (selectedCat, itemSlug) => ({
  fontSize: "12px",
  borderRadius: "6px",
  color: selectedCat.includes(itemSlug) ? "primary.main" : "text.primary",
  borderColor: selectedCat.includes(itemSlug) ? "primary.main" : "divider",
  fontWeight: selectedCat.includes(itemSlug) ? 600 : 400,
});
