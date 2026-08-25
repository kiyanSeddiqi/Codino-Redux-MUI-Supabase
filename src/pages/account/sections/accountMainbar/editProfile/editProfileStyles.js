export const editProfileForm = {
  width: {
    xs: "100%",
    md: "66%",
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
    borderRadius: "10px",
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

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};

export const textarea = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    bgcolor: "background.default",
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
      p: 0,
    },
  },
  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};
