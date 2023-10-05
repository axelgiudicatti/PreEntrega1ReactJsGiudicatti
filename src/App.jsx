import { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "typeface-quicksand";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/CartContainer/CartContainer";
import { CartContextProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cid" element={<ItemListContainer />} />
          <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </CartContextProvider>
    </Router>
  );
}
//  <ItemCount initial={0} stock={15} onAdd={onAdd} />
export default App;
