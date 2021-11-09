import React, { Component } from "react";
import { Link } from "react-router-dom";
import { db } from "../../db";

export default class Products extends Component {
  handleClick() {
    alert("testing click event");
  }
  render() {
    let componentReference = this;
    return (
      <div>
        <h2>All Products</h2>
        <div className="containerProducts">
          {Object.entries(db).map(function (k) {
            return (
              <div className="productElement">
                <h3>{k[1].productName.toLocaleUpperCase()}</h3>
                <Link to={'/Products/' + k[1].productId}>
                <img
                  src={k[1].productImage}
                  alt={k[1].productName}
                  className="productImage"
                />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
