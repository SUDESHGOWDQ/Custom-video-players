import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Player.css";

const Player = ({
  playerRef,
  Url,
  playing,
  handleProgress,
  handleDuration,
  handleSeekEnd,
  muted,
  volume,
}) => {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        url={Url}
        playing={playing}
        onProgress={handleProgress}
        onDuration={handleDuration}
        onSeek={handleSeekEnd}
        controls={false}
        width="100%"
        height="100%"
        muted={muted}
        volume={muted ? 0 : volume}
      />
    </div>
  );
};

export default Player;
