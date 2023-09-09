import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "typeface-quicksand";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/Counter/ItemCount";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:cid" element={<ItemListContainer />} />
        <Route path="/detalle/:pid" element={<ItemDetailContainer />} />
      </Routes>
    </Router>
  );
}
//  <ItemCount initial={0} stock={15} onAdd={onAdd} />
export default App;
