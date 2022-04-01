import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson11.css";

export const Lesson11: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-1-div">
      <img className="rectangle-icon8" alt="" src="rectangle-7.svg" />
      <img className="image-2-icon" alt="" src="image-2@2x.png" />
      <img className="image-1-icon" alt="" src="image-1@2x.png" />
      <img
        className="previous-2-icon"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label">A Blocks</label>
      <label className="a-code-label">A Code</label>
      <img className="numgif1-1-icon" alt="" src="numgif1-1@2x.gif" />
    </div>
  );
};
