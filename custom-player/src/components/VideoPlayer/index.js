import React from "react";
import Player from "./Player";
import Footer from "./Footer";
import useVideoPlayer from "./useVideoPlayer";
import UseFullscreen from "../../hooks/useFullscreen";
import "./index.css";

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};

const Index = ({ Url, isFullscreen }) => {
  const {
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
  } = useVideoPlayer(Url);

  return (
    <div
      className={
        isFullscreen
          ? "video-player-main-container-fullscreen"
          : "video-player-main-container"
      }
    >
      <Player
        playerRef={playerRef}
        Url={Url}
        playing={playing}
        handleProgress={handleProgress}
        handleDuration={handleDuration}
        handleSeekEnd={handleSeekEnd}
        muted={muted}
        volume={volume}
      />
      <Footer
        rewind={rewind}
        togglePlayPause={togglePlayPause}
        playing={playing}
        forward={forward}
        formatTime={formatTime}
        currentTime={currentTime}
        duration={duration}
        sliderValue={sliderValue}
        handleSeek={handleSeek}
        playerRef={playerRef}
        toggleMute={toggleMute}
        muted={muted}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
      />
    </div>
  );
};

export default Index;
