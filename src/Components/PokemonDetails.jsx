import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  DivDetails,
  DivImg,
  Stats,
  ProgressBarContainer,
  ProgressBarFill,
  typeColors,
  Next,
  Previous,
  Close,
  Loading,
  Spinner,
} from "../Style";

function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [id]);

  if (!pokemon)
    return (
      <Loading>
        <Spinner />
      </Loading>
    );

  // eslint-disable-next-line react/prop-types
  const ProgressBar = ({ baseStat }) => {
    const maxStat = 200;
    const percentage = (baseStat / maxStat) * 100;

    return (
      <ProgressBarContainer>
        <ProgressBarFill percentage={percentage} />
      </ProgressBarContainer>
    );
  };

  const formatAltura = (altura) => {
    const alturaEmMetros = altura / 10;
    return alturaEmMetros < 1
      ? `${alturaEmMetros * 100} cm`
      : `${alturaEmMetros.toFixed(1)} M`;
  };

  const formatPeso = (peso) => {
    const pesoEmKg = peso / 10;
    return pesoEmKg < 1 ? `${pesoEmKg * 1000} g` : `${pesoEmKg.toFixed(1)} kg`;
  };

  const NextPokemon = ({ id }) => {
    const nextId = parseInt(id) + 1;
    return `/pokemon/${nextId}`;
  };

  const PreviousPokemon = ({ id }) => {
    const previousId = parseInt(id) - 1;
    return `/pokemon/${previousId}`;
  };

  const back = () => {
    navigate("/");
  };

  return (
    <>
      <DivDetails>
        <Next onClick={() => (window.location.href = NextPokemon({ id }))} />
        <Previous
          onClick={() => (window.location.href = PreviousPokemon({ id }))}
        />
        <Close onClick={back} />
        <DivImg>
          <h2>{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {formatAltura(pokemon.height)}</p>
          <p>Peso: {formatPeso(pokemon.weight)}</p>
          <p>Tipos:</p>
          <div>
            {pokemon.types.map((type) => {
              const typeName = type.type.name;
              return (
                <span
                  key={typeName}
                  style={{ backgroundColor: typeColors[typeName] }}
                >
                  {typeName}
                </span>
              );
            })}
          </div>
        </DivImg>
        <Stats>
          <p>Estatísticas:</p>
          <ul>
            {pokemon.stats.map((stat) => (
              <li key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
                <ProgressBar baseStat={stat.base_stat} />
              </li>
            ))}
          </ul>
        </Stats>
      </DivDetails>
    </>
  );
}

export default PokemonDetails;
