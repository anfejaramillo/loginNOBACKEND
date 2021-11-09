//Import libraries components
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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
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
          <Route path='/Products/:productId' element={<SpecificProduct />}/>
          <Route path="/Products/Create" element={<ProductCreate />}></Route>
        </Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
