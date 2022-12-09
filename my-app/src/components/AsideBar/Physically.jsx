import React from "react";

function Physically(props) {
  return (
    <div>
      <div className="mainP">
        <div className="d-flex flex">
            <div>
              <h4>75kg</h4>
              <p>Weight</p>
            </div>
            <div>
              <h4>6.5</h4>
              <p>Height</p>
            </div>
            <div>
              <h4>25Yrs</h4>
              <p>Age</p>
              <h4 >{props.text}</h4>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Physically;
