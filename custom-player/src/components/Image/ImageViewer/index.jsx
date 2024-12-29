import React, { useRef } from "react";
import Footer from "../Footer";

const Index = ({
  Url,
  currentIndex,
  totalData,
  toggleFullscreen,
  isFullscreen,
}) => {
  const playerRef = useRef(null);

  return (
    <div className="imager">
      <div className="imageViewer">
        <img className="images" src={Url} alt="media content" ref={playerRef} />
      </div>
      <Footer
        currentIndex={currentIndex}
        totalData={totalData}
        playerRef={playerRef}
        toggleFullscreen={toggleFullscreen}
        isFullscreen={isFullscreen}
      />
    </div>
  );
};

export default Index;
