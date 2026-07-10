import { fullScreenControlBox } from "./videoDialogStyles";

function FullscreenControlBox() {
  return (
    <>
      <Box className="fullscreen-controlbox" sx={fullScreenControlBox}>
        <Box sx={videoTitleBox}>
          <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
            {videoTitle}
          </Typography>
          <Stack
            direction="row"
            spacing={0}
            sx={{
              ...videoTimeSliderBox,
              display: { xs: "flex", lg: "none" },
            }}
          >
            <Typography component="span" sx={videoTimeSliderNum}>
              {formatTime(currentTime)}
            </Typography>
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleSeek}
              sx={videoTimeSlider}
            />
            <Typography component="span" sx={videoTimeSliderNum}>
              {formatTime(duration)}
            </Typography>
          </Stack>
        </Box>
        <Box sx={flexBetween(1)}>
          <Box sx={flexBox(1)}>
            <IconButton
              onClick={handleFullscreen}
              disableRipple
              sx={videoControlIcons}
              aria-label="full screen"
            >
              <Fullscreen />
            </IconButton>
            <IconButton
              onClick={handleOpenSpeedMenu}
              disableRipple
              sx={videoControlIcons}
              aria-label="video settings"
            >
              <Settings />
            </IconButton>
            <Menu
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
            <Box
              sx={{ position: "relative" }}
              onMouseEnter={() => setShowVolume(true)}
              onMouseLeave={() => setShowVolume(false)}
            >
              <IconButton
                onClick={handleMute}
                disableRipple
                sx={videoControlIcons}
                aria-label="volume"
              >
                {isMuted || volume === 0 ? (
                  <VolumeOff />
                ) : volume < 50 ? (
                  <VolumeDown />
                ) : (
                  <VolumeUp />
                )}
              </IconButton>
              {showVolume && (
                <Box sx={volumeBox}>
                  <Slider
                    orientation="vertical"
                    value={volume}
                    max={100}
                    onChange={handleVolumeChange}
                    sx={volumeSlider}
                  />
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "sans-serif",
                      color: "text.primary",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {volume}%
                  </Typography>
                </Box>
              )}
            </Box>
          </Box>
          <Stack
            direction="row"
            spacing={0}
            sx={{
              ...videoTimeSliderBox,
              display: { xs: "none", lg: "flex" },
            }}
          >
            <Typography component="span" sx={videoTimeSliderNum}>
              {formatTime(duration)}
            </Typography>
            <Slider
              value={currentTime}
              max={duration}
              onChange={handleSeek}
              sx={videoTimeSlider}
            />
            <Typography component="span" sx={videoTimeSliderNum}>
              {formatTime(currentTime)}
            </Typography>
          </Stack>
          <Box sx={flexBox(1)}>
            <Tooltip title="ده ثانیه به جلو">
              <IconButton
                onClick={handleForward}
                disableRipple
                sx={videoControlIcons}
                aria-label="forward ten secs"
              >
                <Forward10 />
              </IconButton>
            </Tooltip>
            <IconButton
              onClick={handlePlayPause}
              disableRipple
              sx={{
                ...videoControlIcons,
                "& svg": {
                  fontSize: "42px",
                },
              }}
              aria-label="play video"
            >
              {isPlaying ? <PauseCircle /> : <PlayCircle />}
            </IconButton>
            <Tooltip title="ده ثانیه به عقب">
              <IconButton
                onClick={handleBackward}
                disableRipple
                sx={videoControlIcons}
                aria-label="replay ten secs"
              >
                <Replay10 />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default FullscreenControlBox;
