import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { ItemData } from "./components/DogCard";

import { Header } from "./components/Header";
import Main from "./pages/Main";
import Facts from "./pages/Facts";
import Favorites from "./pages/Favorites";

function App() {
  const [cart, setCart] = useState<ItemData[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleClick = (newItem: ItemData) => {
    const existingItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );
    if (existingItemIndex !== -1) {
      removeItemFromCart(existingItemIndex);
    } else {
      const newCart = [...cart, newItem];
      setCart(newCart);

      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  const removeItemFromCart = (index: number) => {
    if (index >= 0 && index < cart.length) {
      const newCart = [...cart];
      newCart.splice(index, 1);
      setCart(newCart);

      localStorage.setItem("cart", JSON.stringify(newCart));
    }
  };

  return (
    <div>
      <Header size={cart.length} search={search} setSearch={setSearch} />
      <Routes>
        <Route
          path="/favorites"
          element={
            <Favorites
              cart={cart}
              removeItemFromCart={removeItemFromCart}
              search={search}
            />
          }
        />
        <Route
          path="/"
          element={<Main search={search} handleClick={handleClick} />}
        />
        <Route path="/facts" element={<Facts />} />
      </Routes>
    </div>
  );
}

export default App;
