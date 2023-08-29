import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "typeface-quicksand";
import Cards from "./components/ItemListContainer/Item";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer />
    </>
  );
}

export default App;
