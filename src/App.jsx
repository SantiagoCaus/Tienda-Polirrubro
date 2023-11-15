import React from "react";
import { ItemList } from "./components/ItemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShoppingCart } from "./components/CartWidget";
import { ShoppingCartProvider } from "./contexts/CartWidgetContext";

export const App = () => {
  return (
    <ShoppingCartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemList greeting="Productos" />} />
          <Route path="/category/id" element={<ItemList greeting="Productos" />} />
          <Route path="/cart" element={<ShoppingCart />} />
        </Routes>
      </Router>
    </ShoppingCartProvider>
  );
};
