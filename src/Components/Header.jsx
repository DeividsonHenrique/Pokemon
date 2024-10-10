import { HeaderPage, LinkHome, DivPages } from "../Style";

function Header() {
  return (
    <HeaderPage>
      <h1>Pokemon</h1>
      <DivPages>
        <LinkHome to="/all-pokemons">Todos Pokemons</LinkHome>
        <LinkHome to="/">Home</LinkHome>
      </DivPages>
    </HeaderPage>
  );
}

export default Header;
