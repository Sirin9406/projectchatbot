import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson1.css";

export const Lesson1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onRectangleImageClick = useCallback(() => {
    navigate("/lesson17");
  }, [navigate]);

  const onPrevious1ImageClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onRectangleImage1Click = useCallback(() => {
    navigate("/lesson11");
  }, [navigate]);

  const onRectangleImage2Click = useCallback(() => {
    navigate("/lesson13");
  }, [navigate]);

  const onRectangleImage3Click = useCallback(() => {
    navigate("/lesson15");
  }, [navigate]);

  const onRectangleImage4Click = useCallback(() => {
    navigate("/lesson12");
  }, [navigate]);

  const onRectangleImage5Click = useCallback(() => {
    navigate("/lesson14");
  }, [navigate]);

  const onRectangleImage6Click = useCallback(() => {
    navigate("/lesson16");
  }, [navigate]);

  return (
    <div className="lesson1-div">
      <img
        className="download-premium-png-of-purple1"
        alt=""
        src="download-premium-png-of-purple-fluid-background-frame-design-element--by-wifiseeker-about-business-frame-fluid-corporate-and-fluid-background-2340000-2@2x.png"
      />
      <img
        className="pink-yellow-and-green-illustra"
        alt=""
        src="pink-yellow-and-green-illustrated-were-ready-to-open-instagram-story-3@2x.png"
      />
      <img
        className="pink-yellow-and-green-illustra1"
        alt=""
        src="pink-yellow-and-green-illustrated-were-ready-to-open-instagram-story-2@2x.png"
      />
      <img
        className="rectangle-icon1"
        alt=""
        src="123pause.gif"
        onClick={onRectangleImageClick}
      />
      <img
        className="previous-1-icon"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious1ImageClick}
      />
      <img
        className="rectangle-icon2"
        alt=""
        src="FirstLesNum@2x.png"
        onClick={onRectangleImage1Click}
      />
      <img
        className="rectangle-icon3"
        alt=""
        src="rectangle-13@2x.png"
        onClick={onRectangleImage2Click}
      />
      <img
        className="rectangle-icon4"
        alt=""
        src="rectangle-15@2x.png"
        onClick={onRectangleImage3Click}
      />
      <img
        className="rectangle-icon5"
        alt=""
        src="rectangle-12@2x.png"
        onClick={onRectangleImage4Click}
      />
      <img
        className="rectangle-icon6"
        alt=""
        src="string.gif"
        onClick={onRectangleImage5Click}
      />
      <img
        className="rectangle-icon7"
        alt=""
        src="iconleds.gif"
        onClick={onRectangleImage6Click}
      />
    </div>
  );
};
