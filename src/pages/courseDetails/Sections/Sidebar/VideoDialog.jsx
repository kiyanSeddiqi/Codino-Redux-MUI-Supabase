import {
  Box,
  Button,
  Checkbox,
  Dialog,
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  videoBackdrop,
  videoContainer,
  videoControlBox,
  videoControlIcons,
  videoPlayBtn,
  videoTag,
  videoTimeSlider,
  videoTimeSliderBox,
  videoTimeSliderNum,
  videoTitleBox,
  videoWatchFrame,
  volumeBox,
  volumeSlider,
} from "./videoDialogStyles";
import { imgBackdrop } from "./sideBarStyles";
import SvgIcon from "../../../../components/ui/SvgIcon/SvgIcon";
import courseVideo from "../../../../../src/assets/video/course_video.mp4";
import { useEffect, useRef, useState } from "react";
import { flexBetween, flexBox } from "../../../../styles/globalStyles";
import {
  Forward10,
  Fullscreen,
  FullscreenExit,
  PauseCircle,
  PlayCircle,
  Replay10,
  Settings,
  VolumeDown,
  VolumeOff,
  VolumeUp,
} from "@mui/icons-material";
import { formatTime } from "../../../../utils/formatTime";

function VideoDialog({ isOpen, onShow, videoTitle }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenControls, setShowFullscreenControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [playbackRate, setPlaybackRate] = useState(1);
  const open = Boolean(anchorEl);
  const [volume, setVolume] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [lastVolume, setLastVolume] = useState(100);

  function handlePlayPause() {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }

  function handleSeek(_, value) {
    videoRef.current.currentTime = value;
    setCurrentTime(value);
  }

  const handleForward = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = Math.min(
      videoRef.current.currentTime + 10,
      videoRef.current.duration,
    );
  };

  const handleBackward = () => {
    if (!videoRef.current) return;

    videoRef.current.currentTime = Math.max(
      videoRef.current.currentTime - 10,
      0,
    );
  };

  const handleFullscreen = async () => {
    if (!document.fullscreenElement) {
      await playerRef.current.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  };

  const handleOpenSpeedMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseSpeedMenu = () => {
    setAnchorEl(null);
  };

  const handleChangeSpeed = (speed) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = speed;
    setPlaybackRate(speed);
  };

  const handleVolumeChange = (_, value) => {
    if (!videoRef.current) return;

    setVolume(value);
    videoRef.current.volume = value / 100;

    const muted = value === 0;
    videoRef.current.muted = muted;
    setIsMuted(muted);
  };

  const handleMute = () => {
    if (!videoRef.current) return;

    if (isMuted) {
      videoRef.current.muted = false;
      videoRef.current.volume = lastVolume / 100;

      setVolume(lastVolume);
      setIsMuted(false);
    } else {
      setLastVolume(volume);

      videoRef.current.muted = true;
      videoRef.current.volume = 0;

      setVolume(0);
      setIsMuted(true);
    }
  };

  useEffect(() => {
    if (!isFullscreen || !showFullscreenControls) return;

    const timer = setTimeout(() => {
      setShowFullscreenControls(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [showFullscreenControls, isFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  return (
    <>
      <Dialog
        sx={videoContainer}
        open={isOpen}
        onClose={() => onShow(false)}
        disableScrollLock
      >
        <Box
          sx={videoWatchFrame}
          ref={playerRef}
          onMouseMove={() => setShowFullscreenControls(true)}
        >
          <Box sx={videoBackdrop(isPlaying)}>
            <Button onClick={handlePlayPause} sx={videoPlayBtn(isPlaying)}>
              {isPlaying ? (
                <SvgIcon name="pauseVideoFilled" color="#fff" size={120} />
              ) : (
                <SvgIcon name="playVideoFilled" color="#fff" size={120} />
              )}
            </Button>
          </Box>
          <video
            ref={videoRef}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            src={courseVideo}
            onLoadedMetadata={() => setDuration(videoRef.current.duration)}
            onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
            style={videoTag}
          ></video>
          {isFullscreen && (
            <Box
              className="video-controlbox"
              sx={{
                ...videoControlBox(isFullscreen),
                opacity: showFullscreenControls ? 1 : 0,
                pointerEvents: showFullscreenControls ? "auto" : "none",
                transition: "opacity .3s",
              }}
            >
              <Box sx={videoTitleBox}>
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
                    <FullscreenExit />
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
          )}
        </Box>
        <Box className="video-controlbox" sx={videoControlBox(isFullscreen)}>
          <Box sx={videoTitleBox}>
            <Typography sx={{ fontSize: { xs: "14px", md: "16px" }, mt: 1 }}>
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
      </Dialog>
    </>
  );
}

export default VideoDialog;
