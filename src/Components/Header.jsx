import { HeaderPage, LinkHome } from "../Style";

function Header() {
  return (
    <HeaderPage className="App-header">
      <h1>Pokemon</h1>
      <LinkHome to="/">Home</LinkHome>
    </HeaderPage>
  );
}

export default Header;
