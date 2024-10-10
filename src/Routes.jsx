import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage.jsx";
import Header from "./Components/Header.jsx";
import PokemonDetails from "./Components/PokemonDetails.jsx";
import AllPokemons from "./Components/AllPokemons.jsx";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/all-pokemons" element={<AllPokemons />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
