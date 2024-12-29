import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Loader from "./components/Loader";
import Header from "./components/Header";
import MediaDetail from "./components/MediaDetails";
import useFullscreen from "./hooks/useFullscreen";
import mediaData from "./Services/Media.json";
import Thumbnail from "./components/Thumbnail";
import "./App.css";

const App = () => {
  const [mediaContent, setMediaContent] = useState(null);

  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const navigate = useNavigate();

  useEffect(() => {
    const mediaFiles = mediaData.media.filter(
      (item) => item.fileType === "video" || item.fileType === "image"
    );

    if (mediaFiles.length > 0) {
      setMediaContent(mediaFiles);
    }
  }, []);

  const handleThumbnailClick = (index) => {
    navigate(`/media/${mediaContent[index].id}`);
  };

  if (!mediaContent || mediaContent.length === 0) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <div className="App">
      <Header isFullscreen={isFullscreen} />
      <Routes>
        <Route
          path="/"
          element={
            <Thumbnail
              mediaContent={mediaContent}
              handleThumbnailClick={handleThumbnailClick}
            />
          }
        />
        <Route
          path="/media/:id"
          element={
            <MediaDetail
              isFullscreen={isFullscreen}
              toggleFullscreen={toggleFullscreen}
              mediaData={mediaContent}
              totalData={mediaContent.length}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
