import React from "react";
import ListData from ".././Data.jsx";
import ProductItem from "./ProductItem.jsx";

function Products(props) {
  return (
    <div className="row">
      {ListData.map((item) => (
       <ProductItem productItem={item} onAddToCard={props.onAddToCard}/>
      ))}
    </div>
  );
}

export default Products;
