import React from "react";
import ImageViewer from "./ImageViewer";
import "./index.css";

const ImageComponent = ({
  Url,
  currentIndex,
  totalData,
  isFullscreen,
  toggleFullscreen,
}) => {
  return (
    <div
      className={
        isFullscreen ? "image-container-fullscreen" : "image-container"
      }
    >
      <ImageViewer
        Url={Url}
        currentIndex={currentIndex}
        totalData={totalData}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </div>
  );
};

export default ImageComponent;
