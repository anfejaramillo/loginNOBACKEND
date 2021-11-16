import React, { Component } from "react";
import { Outlet } from "react-router-dom";

export default class ProductsWrap extends Component {
  render() {
    return (
      <div className="container">
        <h2>Products Home Page</h2>
        <div>
          <Outlet />
        </div>
      </div>
    );
  }
}
