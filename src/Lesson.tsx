import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson.css";

export const Lesson: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButtonClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson-div">
      <img className="bg-lesson-icon" alt="" src="bg-lesson@2x.png" />
      <img
        className="download-premium-png-of-purple"
        alt=""
        src="download-premium-png-of-purple-fluid-background-frame-design-element--by-wifiseeker-about-business-frame-fluid-corporate-and-fluid-background-2340000-1@2x.png"
      />
      <button className="group-button" autoFocus onClick={onGroupButtonClick}>
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="basic">Basic</b>
        <img className="pixels-1-icon" alt="" src="pixels-1@2x.png" />
      </button>
      <div className="group-div">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">Input</b>
        <img className="enter-1-icon" alt="" src="enter-1@2x.png" />
      </div>
      <div className="group-div1">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="music-b">Music</b>
        <img className="music-1-icon" alt="" src="music-1@2x.png" />
      </div>
      <div className="group-div2">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-4-b">lesson 4</b>
      </div>
      <img className="polygon-icon" alt="" src="polygon-1.svg" />
      <img className="polygon-icon1" alt="" src="polygon-2.svg" />
      <img className="polygon-icon2" alt="" src="polygon-3.svg" />
      <img className="polygon-icon3" alt="" src="polygon-4.svg" />
      <img className="previous-2-icon" alt="" src="previous-2@2x.png" />
    </div>
  );
};
