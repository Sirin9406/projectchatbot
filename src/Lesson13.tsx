import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson13.css";

export const Lesson13: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-3-div">
      <img className="rectangle-icon9" alt="" src="rectangle-71.svg" />
      <img
        className="previous-2-icon2"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label2">A Blocks</label>
      <label className="a-code-label2">A Code</label>
      <img className="numgif1-1-icon1" alt="" src="icongif.gif" />
      <img className="image-6-icon" alt="" src="image-6@2x.png" />
      <img className="image-5-icon" alt="" src="image-5@2x.png" />
    </div>
  );
};
