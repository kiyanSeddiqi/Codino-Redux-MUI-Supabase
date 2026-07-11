import { Checkbox, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { videoSpeedBox, videoSpeedItem } from "./videoDialogStyles";

function VideoSpeed({ videoRef, anchorEl, setAnchorEl }) {
  const [playbackRate, setPlaybackRate] = useState(1);
  const open = Boolean(anchorEl);

  const handleCloseSpeedMenu = () => setAnchorEl(null);
  const handleChangeSpeed = (speed) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  return (
    <>
      <Menu
        anchorEl={anchorEl}
        disablePortal
        open={open}
        onClose={handleCloseSpeedMenu}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        sx={videoSpeedBox}
      >
        <Typography
          sx={{
            fontSize: 14,
            textAlign: "center",
          }}
        >
          سرعت پخش
        </Typography>
        {[0.5, 1, 1.5, 2].map((speed) => (
          <MenuItem
            disableRipple
            key={speed}
            onClick={() => handleChangeSpeed(speed)}
            sx={videoSpeedItem}
          >
            <Checkbox
              checked={playbackRate === speed}
              disableRipple
              size="small"
              sx={{ p: 0 }}
            />
            {speed}x
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}

export default VideoSpeed;
