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

export const userImg = {
  width: "100%",
  height: "100%",
  borderRadius: "100%",
  objectFit: "cover",
};

export const accountFormLabel = {
  mb: "6px",
  fontSize: "12px",
  color: "text.primary",
};

export const formTextField = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "6px",
    "& fieldset": {
      borderColor: "divider",
      px: 0,
    },
    "&:hover fieldset": {
      borderColor: "divider",
    },
    "&.Mui-focused fieldset": {
      borderColor: "primary.main",
    },

    "&.Mui-error:hover fieldset": {
      borderColor: "error.main",
    },

    "&.Mui-error.Mui-focused fieldset": {
      borderColor: "error.main",
    },
  },

  "& .MuiOutlinedInput-input": {
    px: "12px",
    py: 1,
  },

  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "12px",
  },

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};

export const tableContainer = {
  borderRadius: "16px",
  overflow: "hidden",
  border: 1,
  borderColor: "divider",
};

export const tableStyle = {
  "& .MuiTableHead-root": {
    bgcolor: "background.default",
  },
  "& .MuiTableHead-root .MuiTableCell-root": {
    p: "10px 20px",
    textAlign: "center",
    fontSize: "16px",
  },
};
