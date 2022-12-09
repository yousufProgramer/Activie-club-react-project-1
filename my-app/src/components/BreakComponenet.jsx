import React from "react";
import breakData from "./Break";
function BreakComponenet() {
  return (
    <div>
      <div className="breakMain py-5">
        <h4>Add A Break</h4>
        <div className="d-flex flex breakItem">
          {breakData.map((item) => (
            <div className="itemB">
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BreakComponenet;
