import { flexCol } from "../../../../../styles/globalStyles";

export const videoContainer = {
  "& .MuiDialog-paper": {
    m: 0,
    borderRadius: "16px",
    maxHeight: "90svh",
    alignItems: "center",
    gap: "14px",
    p: 0,
    overflow: "hidden",
    maxWidth: {
      xs: "90%",
      md: "50%",
    },
    bgcolor: "background.default",
  },
};

export const videoWatchFrame = {
  width: "100%",
  aspectRatio: "16 / 9",
  borderRadius: "16px",
  maxHeight: "80svh",
  position: "relative",
  "&:fullscreen": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export const videoBackdrop = (isPlaying) => ({
  position: "absolute",
  inset: 0,
  display: "grid",
  placeItems: "center",
  backdropFilter: isPlaying ? "none" : "brightness(75%)",
  transition: "backdrop-filter .3s",
  borderRadius: "16px",
});

export const videoTag = {
  width: "100%",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  objectFit: "contain",
  display: "block",
  borderRadius: "16px",
};

export const videoPlayBtn = (isPlaying) => ({
  bgcolor: "transparent",
  boxShadow: "none",
  width: "50%",
  "&:hover": {
    bgcolor: "transparent",
    boxShadow: "none",
    opacity: 1,
  },
  "&:focus": {
    boxShadow: "none",
    outline: "none",
  },
  opacity: isPlaying ? 0 : 1,
  transition: "opacity 0.3s",
});

export const videoControlBox = (isFullscreen) => ({
  ...flexCol(1),
  width: "100%",
  p: "8px 16px",
  bgcolor: "#292a33",
  borderRadius: "16px",
  color: "#fff",
  position: isFullscreen ? "absolute" : "relative",
  bottom: isFullscreen ? "0px" : "auto",
  right: 0,
  left: 0,
  zIndex: 50,
  // ---
});

export const videoTitleBox = {
  display: "flex",
  flexDirection: {
    xs: "column",
    lg: "row",
  },
  gap: 2,
};

export const videoControlIcons = {
  p: "6px",
  borderRadius: "10px",
  color: "#fff",
  "&:hover": {
    bgcolor: "#4A4A55",
  },
  "& svg": {
    fontSize: "26px",
  },
};

export const videoTimeSliderBox = {
  flex: 1,
  gap: "12px",
  m: 0,
  alignItems: "center",
};

export const videoTimeSlider = {
  "& .MuiSlider-thumb": {
    width: 16,
    height: 16,
    bgcolor: "#fff",
    "&::after": {
      width: "20px",
      height: "20px",
    },
  },
  "& .MuiSlider-track": {
    bgcolor: "accent.main",
    border: 0,
  },
  "& .MuiSlider-rail": {
    bgcolor: "#4A4A55",
    opacity: 1,
  },
};

export const videoTimeSliderNum = {
  minWidth: "38px",
  fontFamily: "sans-serif",
};

export const videoSpeedBox = {
  "& .MuiList-root": {
    p: "8px 16px",
    display: "flex",
    gap: 1,
    flexDirection: "column",
  },
  "& .MuiPaper-root": {
    borderRadius: "16px",
    bgcolor: "background.default",
  },
};
export const videoSpeedItem = {
  display: "flex",
  justifyContent: "flex-start",
  gap: 1.5,
  p: 0,
  fontFamily: "sans-serif",
  fontWeight: 500,
  "&:hover": { bgcolor: "transparent" },
};

export const volumeBox = {
  position: "absolute",
  bottom: "38px",
  left: "50%",
  transform: "translateX(-50%)",
  bgcolor: "background.default",
  borderRadius: "16px",
  p: "12px 8px",
  border: 1,
  borderColor: "divider",
  height: "165px",
};

export const volumeSlider = {
  height: 110,
  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
    bgcolor: "#fff",
    "&::after": {
      width: "20px",
      height: "20px",
    },
  },

  "& .MuiSlider-track": {
    bgcolor: "accent.main",
    border: 0,
  },

  "& .MuiSlider-rail": {
    bgcolor: "#4A4A55",
    opacity: 1,
  },
};
