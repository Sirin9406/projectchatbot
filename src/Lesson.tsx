import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Lesson.css";

export const Lesson: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupButton1Click = useCallback(() => {
    navigate("/lesson1");
  }, [navigate]);

  return (
    <div className="lesson-div">
      <button className="group-button" autoFocus>
        <img className="group-icon" alt="" src="group-5.svg" />
        <b className="b">+</b>
      </button>
      <button className="group-button1" autoFocus onClick={onGroupButton1Click}>
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="basic-command">Basic command</b>
      </button>
      <div className="group-div">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">lesson 2</b>
      </div>
      <div className="group-div1">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">lesson 3</b>
      </div>
      <div className="group-div2">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">lesson 4</b>
      </div>
      <div className="group-div3">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">lesson 5</b>
      </div>
      <div className="group-div4">
        <div className="rectangle-div" />
        <div className="rectangle-div1" />
        <b className="lesson-2-b">lesson 6</b>
      </div>
    </div>
  );
};
