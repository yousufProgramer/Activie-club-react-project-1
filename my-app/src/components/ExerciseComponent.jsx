import React from "react";
import Button from "react-bootstrap/Button";
import exerciseData from './Exercise.jsx'
function ExerciseComponent({exerciseCom,songCom, duration}) {
  return (
    <div>
      <div className="exercise py-4">
        <h4 className="pb-4">Exercise Details</h4>
        {exerciseData.map((item) => (
          <div className="exerciceBox breakItem pr-3">
            <h4>{item.duretion}</h4>
            <p className="p-2">{duration}</p>
          </div>
        ))}
        <Button variant="primary">Activity Completed</Button>
        <h1>{exerciseCom}</h1>
        <p>{songCom}</p>
      </div>
    </div>
  );
}

export default ExerciseComponent;
