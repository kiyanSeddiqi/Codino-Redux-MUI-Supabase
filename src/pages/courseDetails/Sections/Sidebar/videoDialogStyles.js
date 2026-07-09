import { flexCol } from "../../../../styles/globalStyles";

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
  overflow: "clip",
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
  height: "100%",
  borderRadius: "16px",
  objectFit: "cover",
  display: "block",
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
  // position: isFullscreen ? "absolute" : "relative",
  // bottom: isFullscreen ? 0 : "auto",
  // left: 0,
  // right: 0,
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

export const volumeBox = {
  position: "absolute",
  bottom: "38px",
  left: "50%",
  transform: "translateX(-50%)",
  bgcolor: "#292a33",
  borderRadius: "12px",
  px: 1,
  py: 2,
};

export const volumeSlider = {
  height: 110,

  "& .MuiSlider-thumb": {
    width: 12,
    height: 12,
    bgcolor: "#fff",
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
