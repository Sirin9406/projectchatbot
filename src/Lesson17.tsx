import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson17.css";

export const Lesson17: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-7-div">
      <img className="rectangle-icon13" alt="" src="rectangle-75.svg" />
      <img
        className="previous-2-icon6"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label6">A Blocks</label>
      <label className="a-code-label6">A Code</label>
      <img className="numgif1-1-icon5" alt="" src="123pausegif.gif" />
      <img className="image-13-icon" alt="" src="image-13@2x.png" />
      <img className="image-14-icon" alt="" src="image-14@2x.png" />
    </div>
  );
};
