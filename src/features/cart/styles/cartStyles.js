import { flexCol } from "../../../styles/globalStyles";

export const cartContainer = {
  ...flexCol(5),
  mt: 4,
  mb: 6,
};

export const cartItemContainer = {
  ...flexCol(4),
  "& > *:not(:last-child)": {
    pb: 4,
    borderBottom: 1,
    borderColor: "divider",
  },
};

export const cartItemBox = {
  display: "flex",
  alignItems: "start",
  gap: 2,
  flexDirection: {
    xs: "column",
    sm: "row",
  },
};

export const cartItemImgBox = {
  width: {
    xs: "100%",
    sm: "20%",
  },
  height: "100%",
  borderRadius: "12px",
  flexShrink: 0,
};

export const cartItemImg = {
  borderRadius: "12px",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

export const cartItemTextContainer = {
  ...flexCol(2),
  width: "100%",
  justifyContent: "space-between",
};

export const discountBox = {
  ...flexCol(2.5),
  p: 2.5,
  border: 1,
  borderRadius: "24px",
  borderColor: "divider",
};

export const discountInput = {
  flex: 1,
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
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
  },

  "& .MuiOutlinedInput-input": {
    px: "10px",
    py: "12px",
  },

  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "14px",
  },

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};

export const cartSidebar = {
  // flex flex-col p-5 border rounded-2xl gap-6
  ...flexCol(3),
  border: 1,
  borderColor: "divider",
  borderRadius: "16px",
  p: 2.5,
};
