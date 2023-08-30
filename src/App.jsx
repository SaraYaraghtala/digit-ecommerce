import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Header";
import Products from "./Pages/Products";
import CheckOut from "./Pages/CheckOut";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/about" Component={About} />
          < Route path="/products/:categoryId" Component={Products}/>
          <Route path="/checkout" Component={CheckOut} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
