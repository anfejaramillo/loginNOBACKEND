//Import libraries components
import React, { Component } from "react";
import { Link, Routes, Route } from "react-router-dom";
import { db } from "./db";
import "./App.css";

//Import components
import Home from "./Components/Home";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import ProductsWrap from "./Components/Products/ProductsWrap";
import ProductCreate from "./Components/Products/ProductCreate";
import Products from "./Components/Products/Products";
import SpecificProduct from "./Components/Products/SpecificProduct";
import Login from "./Components/Login/Login";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      username: "",
      nombre: "",
    };
    this.updateLogState = this.updateLogState.bind(this);
  }

  generateAppMenu() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div>Username: {this.state.username}</div>
            <div>Nombre: {this.state.nombre}</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Products">Products</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Products" element={<ProductsWrap />}>
            <Route path="/Products" element={<Products />}></Route>
            <Route path="/Products/:productId" element={<SpecificProduct />} />
            <Route path="/Products/Create" element={<ProductCreate />}></Route>
          </Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    );
  }

  async updateLogState(logState, username, name) {
    await this.setState({ logged: logState, username: username, nombre: name });
    console.log(this.state);
  }

  generateAppLogin() {
    <input type="button" />
    return <Login updateLogStateLOGIN={this.updateLogState} />;
  }

  render() {
    if (this.state.logged) {
      return this.generateAppMenu();
    } else {
      return this.generateAppLogin();
    }
  }
}
