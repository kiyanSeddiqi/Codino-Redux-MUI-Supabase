import {
  Box,
  Button,
  IconButton,
  Slider,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import {
  videoBackdrop,
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
} from "./videoPlayerStyle";
import SvgIcon from "../SvgIcon/SvgIcon";
import { flexBetween, flexBox, flexCol } from "../../../styles/globalStyles";
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
import VideoSpeed from "../../../pages/courseDetails/Sections/Sidebar/VideoDialog/VideoSpeed";
import { formatTime } from "../../../utils/formatTime";

function VideoPlayer({ videoSrc, videoTitle = "" }) {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showFullscreenControls, setShowFullscreenControls] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);

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
    }, 5000);

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
      <Box sx={flexCol("14px")}>
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
            src={videoSrc}
            onLoadedMetadata={() => setDuration(videoRef.current.duration)}
            onTimeUpdate={() => setCurrentTime(videoRef.current.currentTime)}
            style={videoTag}
          ></video>
          {isFullscreen && (
            <Box
              className="video-controlbox"
              sx={{
                ...videoControlBox(isFullscreen),
                gap: 0,
                pb: 0,
                opacity: showFullscreenControls ? 1 : 0,
                pointerEvents: showFullscreenControls ? "auto" : "none",
                transition: "opacity .3s",
              }}
            >
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
                  sx={{
                    ...videoTimeSlider,
                    "&.MuiSlider-root": {
                      py: 0,
                    },
                  }}
                />
                <Typography component="span" sx={videoTimeSliderNum}>
                  {formatTime(duration)}
                </Typography>
              </Stack>
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
                  <VideoSpeed
                    videoRef={videoRef}
                    anchorEl={anchorEl}
                    setAnchorEl={setAnchorEl}
                    playbackRate={playbackRate}
                    setPlaybackRate={setPlaybackRate}
                  />
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
              <VideoSpeed
                videoRef={videoRef}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                playbackRate={playbackRate}
                setPlaybackRate={setPlaybackRate}
              />
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
      </Box>
    </>
  );
}

export default VideoPlayer;
