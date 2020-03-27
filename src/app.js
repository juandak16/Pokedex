import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Pokedex } from "./components/pokedex/pokedex";

function App() {
  return (
    <div className="app">
      <Header />
      <Pokedex />
    </div>
  );
}

export default App;
