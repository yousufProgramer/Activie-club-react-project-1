import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function ProductItem({ productItem, onAddToCard }) {
  return (
    <div className="col-lg-4 col-md-12 my-3">
      <div className="card shadow">
        <img className="img" src="../1.webp" alt="" />
        <div className="card-body">
          <h4>{productItem.title}</h4>
          <p>{productItem.description}</p>
          <p>Exercise Time:{productItem.ageRange}</p>
          <p>Break-time:{productItem.duration}</p>
          <Button onClick={() => onAddToCard(productItem.duration)} variant="primary">
            {productItem.btn}
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
