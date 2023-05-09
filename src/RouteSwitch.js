import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Checkout from "./components/checkout.component";
import Complete from "./components/complete.component";
import Item from "./components/item.component";
import Shop from "./components/shop.component";
import Product from "./components/product.component";

// main page
// catalogue store
// each item
// checkout
// complete

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/shop" element={<Shop />} />
        {/* make item dynamic */}
        {/* <Route path="/shop/item" element={<Item />} /> */}
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/shop/:id" element={<Product/>} />

      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
