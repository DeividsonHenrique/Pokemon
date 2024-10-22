import { useEffect, useState } from "react";
import {
  HomePageSection,
  ListItem,
  Title,
  UlList,
  Loading,
  Spinner,
} from "../Style";

function HomePage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=20")
      .then((response) => response.json())
      .then((data) => {
        setPokemonList(data.results);
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Loading>
        <Spinner />
      </Loading>
    );

  const getPokemonId = (url) => {
    const urlArray = url.split("/");
    return urlArray[urlArray.length - 2];
  };

  return (
    <>
      <body>
        <Title>Principais Pokémons</Title>
        <HomePageSection className="pokemon-list">
          {pokemonList.map((pokemon, index) => {
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

export default HomePage;
