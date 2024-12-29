import React, { Suspense } from "react";
import Carousel from "../Carousel";
import Loader from "../Loader";
import "./Home.css";

const Home = ({
  isFullscreen,
  currentMedia,
  currentIndex,
  mediaData,
  toggleFullscreen,
  handlePrevious,
  handleNext,
  Url,
}) => {
  const VideoPlayer = React.lazy(() => import("../VideoPlayer"));
  const ImageComponent = React.lazy(() => import("../Image"));

  return (
    <div className="home">
      <Suspense
        fallback={
          <div className="loader-container">
            <Loader />
          </div>
        }
      >
        <div className="media-container">
          {currentMedia.fileType === "video" && (
            <VideoPlayer isFullscreen={isFullscreen} Url={currentMedia.url} />
          )}
          {currentMedia.fileType === "image" && (
            <ImageComponent
              Url={currentMedia.url}
              currentIndex={currentIndex}
              totalData={mediaData.media.length}
              toggleFullscreen={toggleFullscreen}
              isFullscreen={isFullscreen}
            />
          )}

          <Carousel handlePrevious={handlePrevious} handleNext={handleNext} />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
