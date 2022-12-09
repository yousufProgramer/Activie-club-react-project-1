import React, { useState } from "react";
import "./card.css";
import Header from "./Header.jsx";
import Products from "./Product/Products.jsx";
import AsideBar from "./AsideBar/AsideBar.jsx";
function Card() {
  const [duration, setDuration] = useState();
  const addToCard = (item) => {
    setDuration(item);
  };
  return (
    <div className="mainCard">
      <div className="container">
        <div className="row">
          <div className="col-9">
            <div className="hederCard">
              <Header />
              <Products onAddToCard={addToCard} />
            </div>
          </div>
          {/***********side side bar **************/}
          <div className="col-lg-3 col-sm-12 col-md-12 headerSide">
            <AsideBar duration={duration} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
