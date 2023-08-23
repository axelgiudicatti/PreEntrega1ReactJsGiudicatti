import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "typeface-quicksand";
import Cards from "./components/Cards/Cards";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="tarjetas">
        <Cards
          foto="ipa.webp.png"
          estilo="IPA"
          IBU="65"
          Alc="6.5%"
          SRM="12.5"
        />
        <Cards
          foto="golden.webp.png"
          estilo="Golden Ale"
          IBU="15"
          Alc="5.2%"
          SRM="12"
        />
        <Cards
          foto="irish.webp.png"
          estilo="Irish Red Ale"
          IBU="25"
          Alc="5%"
          SRM="18"
        />
        <Cards
          foto="stout.webp.png"
          estilo="Oatmeal Stout"
          IBU="35"
          Alc="5.3%"
          SRM="32"
        />
      </div>
    </>
  );
}

export default App;
