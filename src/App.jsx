import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Navbar } from "./Components/Navbar";
import { Header } from "./Components/Header";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Details } from "./Pages/Details";
import { Cart } from "./Pages/Cart";
import { Footer } from "./Components/Footer";
import { getAllProducts } from "./Actions/actions";
import { ButtonCart } from "./Components/ButtonCart";
import "./style.css";

export const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <ButtonCart />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/products/details" Component={Details} />
          <Route path="/shopping_cart" Component={Cart} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};