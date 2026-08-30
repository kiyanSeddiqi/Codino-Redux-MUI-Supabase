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
  aspectRatio: 1,
  display: {
    xs: "none",
    md: "block",
  },
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
  p: { xs: 1.5, sm: 2.5 },
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
  ...flexCol(3),
  border: 1,
  borderColor: "divider",
  borderRadius: "16px",
  p: {
    xs: 1.5,
    sm: 2.5,
  },
};

export const paymentMethodToggle = {
  borderRadius: "12px",
  p: "10px",
  bgcolor: "background.paper",
};

export const paymentToggleBtn = {
  px: 1,
  flex: 1,
  zIndex: 2,
  fontSize: {
    xs: "12px",
    sm: "14px",
  },
  "&:hover": {
    bgcolor: "transparent",
  },
};

export const paymentSlider = {
  position: "absolute",
  left: 0,
  width: "50%",
  bgcolor: "background.default",
  display: "block",
  height: "100%",
  borderRadius: "8px",
  transition: "transform 0.3s ease",
  boxShadow: 1,
  border: 1,
  borderColor: "primary.main",
};

export const filterOption = {
  "& .MuiFormControlLabel-label": {
    fontSize: "14px",
  },
  gap: "10px",
  mr: 0,
};

export const filterOptionCheckbox = {
  "&.Mui-checked": {
    color: "primary.main",
  },
  color: "primary.main",
  p: 0,
};

export const walletAddressBox = {
  display: "flex",
  alignItems: "center",
  p: "4px 8px",
  borderRadius: "6px",
  border: 1,
  borderColor: "divider",
};

export const trackingCodeInput = {
  "& .MuiOutlinedInput-root": {
    fontSize: "14px",
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
  },

  "& .MuiOutlinedInput-input": {
    p: "10px",
  },

  "& .MuiOutlinedInput-input::placeholder": {
    fontSize: "14px",
  },

  "& .MuiFormHelperText-root": {
    textAlign: "right",
  },
};

export const removeDialogStyle = {
  "& .MuiDialog-paper": {
    display: "flex",
    flexDirection: "row",
    gap: 2.5,
    bgcolor: "background.default",
    p: "8px 16px",
    borderRadius: "6px",
    m: 0,
    width: {
      xs: "90%",
      sm: "60%",
      md: "40%",
      lg: "40%",
      xl: "30%",
    },
    minHeight: "150px",
  },
};

export const walletAddress = {
  color: "text.secondary",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  width: "100%",
  direction: "ltr",
};
