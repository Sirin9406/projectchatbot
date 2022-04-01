import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson16.css";

export const Lesson16: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-6-div">
      <img className="rectangle-icon12" alt="" src="rectangle-74.svg" />
      <img
        className="previous-2-icon5"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label5">A Blocks</label>
      <label className="a-code-label5">A Code</label>
      <img className="numgif1-1-icon4" alt="" src="numgif1-1@2x.png" />
      <img className="image-11-icon" alt="" src="image-11@2x.png" />
      <img className="image-12-icon" alt="" src="image-12@2x.png" />
    </div>
  );
};
