import { useEffect, useState } from "react";
import {
  HomePageSection,
  ListItem,
  Title2,
  UlList,
  Loading,
  Spinner,
} from "../Style.js";
import SearchPokemon from "./SearchPokemon.jsx";

function AllPokemons() {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fazer a requisição à API para obter a lista de Pokémon
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setFilteredPokemon(data.results);
        setIsLoading(false);
      });
  }, []);

  const getPokemonId = (url) => {
    const urlParts = url.split("/");
    return urlParts[urlParts.length - 2];
  };

  const handleSearch = (query) => {
    // Filtrar os Pokémon com base na busca
    const filtered = pokemonList.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPokemon(filtered);
  };

  if (isLoading)
    return (
      <Loading>
        <Spinner />
      </Loading>
    );
  return (
    <>
      <body>
        <Title2>Todos Pokémons</Title2>

        <SearchPokemon onSearch={handleSearch} />
        <HomePageSection>
          {filteredPokemon.map((pokemon, index) => {
            const pokemonId = getPokemonId(pokemon.url);
            const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
            return (
              <UlList key={index} className="pokemon-card">
                <ListItem to={`/pokemon/${pokemonId}`}>
                  <img src={pokemonImageUrl} alt={pokemon.name} />
                  <p>{pokemon.name}</p>
                </ListItem>
              </UlList>
            );
          })}
        </HomePageSection>
      </body>
    </>
  );
}

export default AllPokemons;
