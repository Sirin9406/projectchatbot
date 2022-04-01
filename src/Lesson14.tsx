import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson14.css";

export const Lesson14: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-4-div">
      <img className="rectangle-icon10" alt="" src="rectangle-72.svg" />
      <img
        className="previous-2-icon3"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label3">A Blocks</label>
      <label className="a-code-label3">A Code</label>
      <img className="numgif1-1-icon2" alt="" src="rectangle-14@2x.gif" />
      <img className="image-7-icon" alt="" src="image-7@2x.png" />
      <img className="image-8-icon" alt="" src="image-8@2x.png" />
    </div>
  );
};
