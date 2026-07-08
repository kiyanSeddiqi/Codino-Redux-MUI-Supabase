import { flexBox } from "../../../../styles/globalStyles";

export const courseBreadcrumb = {
  fontSize: "14px",
  "& a": {
    transition: "color 0.2s ease",
    "&:hover": {
      color: "text.primary",
    },
  },
  "& .MuiBreadcrumbs-ol": {
    rowGap: 1,
  },
};

export const courseHeaderBox = {
  display: {
    xs: "none",
    md: "flex",
  },
  flexDirection: "column",
  gap: 2,
};

export const courseHeaderTitle = {
  fontSize: {
    xs: "20px",
    lg: "24px",
  },
  fontWeight: 600,
};
