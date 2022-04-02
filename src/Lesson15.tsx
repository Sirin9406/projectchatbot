
import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson15.css";

export const Lesson15: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-5-div">
      <img className="rectangle-icon11" alt="" src="rectangle-73.svg" />
      <img
        className="pink-yellow-and-green-illustra6"
        alt=""
        src="pink-yellow-and-green-illustrated-were-ready-to-open-instagram-story-21@2x.png"
      />
      <img
        className="previous-2-icon5"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label4">A Blocks</label>
      <label className="a-code-label4">A Code</label>
      <img className="numgif1-1-icon3" alt="" src="arrowgif.gif" />
      <img className="image-9-icon" alt="" src="image-9@2x.png" />
      <img className="image-10-icon" alt="" src="image-10@2x.png" />
    </div>
  );
};

