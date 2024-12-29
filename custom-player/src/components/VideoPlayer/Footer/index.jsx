import React from "react";
import "./Footer.css";
import UseFullscreen from "../../../hooks/useFullscreen";
import { CiVolume, CiVolumeHigh, CiPlay1, CiPause1 } from "react-icons/ci";
import { MdFastForward, MdFastRewind } from "react-icons/md";

const index = ({
  rewind,
  togglePlayPause,
  playing,
  forward,
  formatTime,
  currentTime,
  duration,
  sliderValue,
  handleSeek,
  toggleMute,
  muted,
  volume,
  handleVolumeChange,
}) => {
  const { isFullscreen, toggleFullscreen } = UseFullscreen();

  return (
    <div className={isFullscreen ? "fullscreen-footer" : "footer"}>
      <div className="progress-container">
        <span className="times">{formatTime(currentTime)}</span>
        <input
          type="range"
          min="0"
          max={duration}
          value={sliderValue}
          onChange={handleSeek}
          className="progress-slider"
        />
        <span className="times">{formatTime(duration)}</span>
      </div>
      <div className="custom-controls" style={{ width: "100%" }}>
        <div className="left-controls">
          <button onClick={toggleMute} className="mute-button">
            {muted ? <CiVolume size={20} /> : <CiVolumeHigh size={20} />}
          </button>
          <div className="volume-container">
            <input
              type="range"
              id="volume"
              min="0"
              max="1"
              step="0.01"
              value={muted ? 0 : volume}
              onChange={handleVolumeChange}
              className="volume-bar"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="middle-controls">
          <button onClick={rewind} className="rewind-button">
            <MdFastRewind size={20} />
          </button>
          <button onClick={togglePlayPause} className="play-pause-button">
            {playing ? <CiPause1 size={20} /> : <CiPlay1 size={20} />}
          </button>
          <button onClick={forward} className="forward-button">
            <MdFastForward size={20} />
          </button>
        </div>
        <div className="right-controls">
          {!isFullscreen ? (
            <button
              onClick={() => toggleFullscreen(document.documentElement)}
              disabled={isFullscreen}
              className="fullscreen-button"
            >
              <i class="fa-solid fa-expand" style={{ fontSize: 20 }}></i>
            </button>
          ) : (
            <button
              onClick={() => toggleFullscreen(document.documentElement)}
              disabled={!isFullscreen}
              className="fullscreen-button"
            >
              <i class="fa-solid fa-compress" style={{ fontSize: 20 }}></i>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default index;
