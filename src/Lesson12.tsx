import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson12.css";

export const Lesson12: FunctionComponent = () => {
  const navigate = useNavigate();

  const onPrevious2ImageClick = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson1-2-div">
      <img
        className="previous-2-icon1"
        alt=""
        src="previous-1@2x.png"
        onClick={onPrevious2ImageClick}
      />
      <label className="a-blocks-label1">A Blocks</label>
      <label className="a-code-label1">A Code</label>
      <img className="image-3-icon" alt="" src="image-3@2x.png" />
      <img className="image-4-icon" alt="" src="image-4@2x.png" />
      <img className="ledsgif-1-icon" alt="" src="ledsgif-1@2x.gif" />
    </div>
  );
};
