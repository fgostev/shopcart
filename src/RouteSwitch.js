import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./components/checkout.component";
import Complete from "./components/complete.component";
import Shop from "./components/shop.component";
import Product from "./components/product.component";
import { useState } from "react";


const RouteSwitch = () => {

  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop cart={cart} />} />
        <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} count={count} setCount={setCount}/>} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/shop/:id" element={<Product cart ={cart} setCart={setCart}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
