export const editProfileForm = {
  width: {
    xs: "100%",
    lg: "66%",
  },
  display: {
    xs: "flex",
    lg: "grid",
  },
  flexDirection: "column",
  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
  gap: 3,
  mx: "auto",
};

export const editProfileTextField = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    bgcolor: "background.default",
    height: "44px",

    "& fieldset": {
      borderColor: "transparent",
      px: 0,
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      border: 2,
      borderColor: "primary.main",
    },

    "& .MuiOutlinedInput-input": {
      height: "100%",
      boxSizing: "border-box",
    },
  },

  "& .MuiOutlinedInput-input": {
    px: "12px",
    py: 1,
  },

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};
