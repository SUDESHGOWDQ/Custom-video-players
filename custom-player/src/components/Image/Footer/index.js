import React from "react";
import "./index.css";
const index = ({
  currentIndex,
  totalData,
  isFullscreen,
  toggleFullscreen,
  playerRef,
}) => {
  return (
    <div className="image-footer">
      <div className="image-controls">
        <div className="left-controls"></div>
        <div className="middle-controls">
          {currentIndex + 1}/{totalData}
        </div>
        <div className="right-controls">
          <button
            className="fullscreen-button"
            onClick={() => toggleFullscreen(playerRef.current.wrapper)}
          >
            {isFullscreen ? (
              <i class="fa-solid fa-compress" style={{ fontSize: 20 }}></i>
            ) : (
              <i class="fa-solid fa-expand" style={{ fontSize: 20 }}></i>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default index;
