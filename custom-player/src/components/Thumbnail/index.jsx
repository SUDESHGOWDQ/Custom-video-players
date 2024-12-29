import React from "react";
import "./Thumbnail.css";

const index = ({ mediaContent, handleThumbnailClick }) => {
  return (
    <div className="thumbnails-container">
      {mediaContent.map((item, index) => (
        <div
          key={item.id}
          className="thumbnail-item"
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={item.thumbnailUrl}
            alt={`thumbnail ${index}`}
            className="thumbnail"
          />
        </div>
      ))}
    </div>
  );
};

export default index;
