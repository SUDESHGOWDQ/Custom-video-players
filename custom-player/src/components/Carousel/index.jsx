import React from "react";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import "./Carousel.css";

const Carousel = ({ handlePrevious, handleNext }) => {
  return (
    <div className="carousel">
      <button className="carousel-btn" onClick={handlePrevious}>
        <FaCaretLeft />
      </button>
      <button className="carousel-btn" onClick={handleNext}>
        <FaCaretRight />
      </button>
    </div>
  );
};

export default Carousel;
