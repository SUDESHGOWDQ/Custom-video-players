import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Image from "../Image";
import VideoPlayer from "../VideoPlayer";
import Carousel from "../Carousel";

const MediaDetail = ({ mediaData, toggleFullscreen, isFullscreen }) => {
  const { id } = useParams();
  const [currentIndex, setCurrentIndex] = useState(
    mediaData.findIndex((item) => item.id === parseInt(id))
  );

  const [currentMedia, setCurrentMedia] = useState(mediaData[currentIndex]);

  useEffect(() => {
    setCurrentIndex(mediaData.findIndex((item) => item.id === parseInt(id)));
  }, [id, mediaData]);

  useEffect(() => {
    setCurrentMedia(mediaData[currentIndex]);
  }, [currentIndex, mediaData]);

  if (currentIndex === -1 || !currentMedia) {
    return <div>Media item not found</div>;
  }

  const handleNext = () => {
    if (currentIndex < mediaData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="media-detail">
      {currentMedia.fileType === "image" ? (
        <Image
          Url={currentMedia.url}
          currentIndex={currentIndex}
          totalData={mediaData.length}
          toggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />
      ) : currentMedia.fileType === "video" ? (
        <VideoPlayer Url={currentMedia.url} isFullscreen={isFullscreen} />
      ) : null}

      <Carousel handlePrevious={handlePrevious} handleNext={handleNext} />
    </div>
  );
};

export default MediaDetail;
