import { useState, useRef, useCallback, useEffect } from "react";

const useVideoPlayer = (initialUrl) => {
  const playerRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);

  const toggleMute = () => {
    setMuted(!muted);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const togglePlayPause = useCallback(() => {
    setPlaying((prevPlaying) => !prevPlaying);
  }, []);

  const handleProgress = useCallback(
    ({ playedSeconds }) => {
      if (!isSeeking) {
        setCurrentTime(playedSeconds);
      }
    },
    [isSeeking]
  );

  const handleDuration = useCallback((duration) => {
    setDuration(duration);
  }, []);

  const handleSeekEnd = () => {
    setIsSeeking(false);
  };

  useEffect(() => {
    setSliderValue(currentTime);
  }, [currentTime]);

  const handleSeek = useCallback(
    (event) => {
      const newTime = parseFloat(event.target.value);
      if (isNaN(newTime)) {
        console.error("Invalid time input");
        return;
      }
      setIsSeeking(true);
      setCurrentTime(newTime); // Update currentTime immediately for slider to reflect.
      if (playerRef.current) {
        playerRef.current.seekTo(newTime, "seconds");
      }
      setSliderValue(newTime); // Update slider value during seeking
    },
    [currentTime]
  );

  const rewind = () => {
    const newTime = Math.max(currentTime - 10, 0);
    setCurrentTime(newTime);
    if (playerRef.current) {
      playerRef.current.seekTo(newTime, "seconds");
    }
  };

  const forward = () => {
    const newTime = Math.min(currentTime + 10, duration);
    setCurrentTime(newTime);
    if (playerRef.current) {
      playerRef.current.seekTo(newTime, "seconds");
    }
  };

  return {
    playerRef,
    playing,
    togglePlayPause,
    duration,
    currentTime,
    sliderValue,
    handleProgress,
    handleDuration,
    handleSeek,
    handleSeekEnd,
    rewind,
    forward,
    toggleMute,
    muted,
    volume,
    handleVolumeChange,
  };
};

export default useVideoPlayer;
