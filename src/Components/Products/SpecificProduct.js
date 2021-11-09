import React, { Component } from "react";
import { useParams } from "react-router";
import { db } from "../../db";

function SpecificProduct() {
  let { productId } = useParams();
  return (
    <div className="productElement">
      <h3>{db[productId].productName.toLocaleUpperCase()}</h3>
      <img
        src={db[productId].productImage}
        alt={db[productId].productName}
        className="productImage"
      />
      <ul>
        <li>Product Stock: {db[productId].productStock}</li>
        <li>Product Price: {db[productId].productPrice}</li>
        <li>Product Rating: {db[productId].rating}</li>
      </ul>
    </div>
  );
}

export default SpecificProduct;
