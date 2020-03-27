import React from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { Pokemons } from "./components/pokemons/pokemons";

function App() {
  return (
    <div className="app">
      <Header />
      <Pokemons />
      <Footer />
    </div>
  );
}

export default App;
