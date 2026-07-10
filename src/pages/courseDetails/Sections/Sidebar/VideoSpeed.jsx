import { Checkbox, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";

function VideoSpeed() {
  return (
    <>
      <Menu
        disablePortal
        anchorEl={anchorEl}
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
        sx={{
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
        }}
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
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              gap: 1.5,
              p: 0,
              fontFamily: "sans-serif",
              fontWeight: 500,
              "&:hover": { bgcolor: "transparent" },
            }}
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
