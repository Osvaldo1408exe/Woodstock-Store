import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home";
import Products from "./pages/products/products";
import Item from "./pages/item/item";
import { CartProvider } from './context/CartContext';
import Cart from "./pages/cart";
import Contact from "./pages/contact/contact";

const NotFound = () => <h1>404 - Page Not Found</h1>;

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
