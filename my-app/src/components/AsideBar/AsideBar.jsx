import React from "react";
import Physically from "./Physically";
import BreakComponenet from "../BreakComponenet";
import ExerciseComponent from "../ExerciseComponent";
const AsideBar = (props) => {
    console.log('props ============', props);
  return (
    <div className="headerPadding">
      <div className="sideMain">
        <div className="profile d-flex">
          <img className="sideImg" src="1.webp" alt="profileImage" />
          <div className="text py-1 ">
            <h5>Yousuf Ahmed</h5>
            <span>Mirpur, Dhaka</span>
          </div>
        </div>
        <Physically/>
        <BreakComponenet />
        <ExerciseComponent exerciseCom={props.exercise} songCom = {props.song} duration={props.duration}/>
      </div>
    </div>
  );
};

export default AsideBar;
