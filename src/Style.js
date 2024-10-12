import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        --brand_color: #7CA2F4;
        --dark: #121214;
        --white_soft: #f3f7ff;
        --white: #ffffff;
    }


    *{
        font-family: 'Poppins', sans-serif;
        background-color: var(--dark);
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}

`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #fff000;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #fff;
  }
`;

export const Next = styled(FaArrowAltCircleRight)`
  position: absolute;
  top: 10px;
  right: 45%;
  color: var(--white_soft);
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--brand_color);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 900px) {
    right: 40%;
  }

  @media (max-width: 600px) {
    right: 10%;
    top: 100px;
  }
`;

export const Previous = styled(FaArrowAltCircleLeft)`
  position: absolute;
  top: 10px;
  left: 45%;
  color: var(--white_soft);
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--brand_color);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 900px) {
    left: 40%;
  }

  @media (max-width: 600px) {
    left: 10%;
    top: 100px;
  }
`;

export const Close = styled(IoMdCloseCircle)`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--white_soft);
  font-size: 2rem;
  cursor: pointer;
  border-radius: 50%;
  background-color: transparent;
  transition: 0.2s ease-in-out;

  &:hover {
    color: var(--brand_color);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  }
`;

// Header styles -----------------------------------------

export const HeaderPage = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  height: 70px;
  background-color: #fff0ff;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    margin-left: 50px;
    background-color: var(--white_soft);
  }

  @media (max-width: 600px) {
    height: 50px;

    h1 {
      font-size: 1rem;
      margin-left: 20px;
    }
  }
`;

export const LinkHome = styled(LinkStyled)`
  text-decoration: none;
  margin: 0px 0px 0px 10px;
  background-color: #212121;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: #000;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 600px) {
    margin: 0px 0px 0px 5px;
    font-size: 0.8rem;
    padding: 8px 12px;
  }
`;

export const DivPages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-right: 50px;

  @media (max-width: 600px) {
    margin-right: 20px;
  }
`;

// HomePage styles ---------------------------------------

export const Title = styled.h2`
  color: #fff;
  margin-top: 100px;
  font-size: 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const Title2 = styled.h2`
  color: #fff;
  margin-top: 100px;
  font-size: 3rem;

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

export const HomePageSection = styled.section`
  max-width: 1280px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  p {
    text-align: center;
  }
`;

export const UlList = styled.ul`
  padding: 10px;
  list-style: none;
`;

export const ListItem = styled(LinkStyled)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 150px;
  border: 2px solid linear-gradient(0deg, #7ca2f4 0%, #f3f7ff 100%);
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0px 0px 5px 0px var(--brand_color);
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

// PokemonDetails styles ---------------------------------

export const DivDetails = styled.div`
  section {
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #ccc;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 2px var(--brand_color);
    margin: 0 auto;

    @media (max-width: 600px) {
      flex-direction: column;
      width: 90%;

      margin-top: 100px;
      margin-bottom: 20px;
    }
  }
`;

export const DivImg = styled.div`
  height: 400px;
  width: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    background-color: transparent;
    text-align: center;
    text-transform: uppercase;
  }

  img {
    width: 50%;
    background-color: transparent;
  }

  p {
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: bold;
  }

  div {
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    text-transform: capitalize;
    text-align: center;

    span {
      font-size: 1.2rem;
      font-weight: bold;
      padding: 5px;
      margin: 0px 5px;
      color: white;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 300px;

    h2 {
      font-size: 1rem;
    }

    img {
      width: 40%;
    }

    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    height: 300px;
    width: 300px;

    h2 {
      font-size: 1rem;
    }

    img {
      width: 40%;
    }

    p {
      font-size: 1rem;
    }
  }
`;

export const typeColors = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038F8",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
  normal: "#A8A878",
};

export const Stats = styled.div`
  height: 400px;
  width: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 1.2rem;
    font-weight: bold;
    background-color: transparent;
    text-transform: uppercase;
  }

  ul {
    background-color: transparent;
    list-style: none;
  }

  li {
    background-color: transparent;
    font-size: 1.2rem;
    font-weight: bold;
  }

  @media (max-width: 900px) {
    height: 300px;
    width: 300px;
    p {
      font-size: 1rem;
    }
    li {
      font-size: 1rem;
    }
  }

  @media (max-width: 600px) {
    height: 280px;
    width: 350px;
    p {
      font-size: 1rem;
    }
    li {
      font-size: 1rem;
    }
  }
`;

export const ProgressBarContainer = styled.div`
  width: 300px;
  background-color: #181818;
  border-radius: 50px;
  margin-bottom: 5px;

  @media (max-width: 900px) {
    width: 250px;
  }

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const ProgressBarFill = styled.div`
  height: 10px;
  width: ${(props) => props.percentage}%;
  background-color: ${(props) =>
    props.percentage > 70 ? "green" : props.percentage > 40 ? "yellow" : "red"};
  border-radius: 50px;
  transition: width 0.3s ease-in-out;

  @media (max-width: 600px) {
    height: 8px;
  }
`;

// SearchBar styles -----------------------------------------

export const SearchBar = styled.input`
  width: 400px;
  height: 30px;
  background-color: var(--white_soft);
  text-align: center;
  border: none;
  border-radius: 15px;
  outline: none;
  margin: 10px 0px 20px 0px;
  font-size: 1rem;
  font-weight: 500;
  text-transform: capitalize;
  box-shadow: 0px 0px 10px 0px var(--brand_color);

  @media (max-width: 600px) {
    width: 250px;
  }
`;

export const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  font-size: 2rem;
  background-color: var(--dark);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  100% {
    transform: rotate(-360deg);
  }
`;

export const Spinner = styled.div`
  width: 1em;
  height: 1em;
  background-color: var(--brand_color);
  border-radius: 50%;
  box-shadow: 0 -3em rgba(255, 255, 255, 1),
    2.24em -2.25em rgba(255, 255, 255, 0.875), 3em 0 rgba(255, 255, 255, 0.75),
    2.25em 2.25em rgba(255, 255, 255, 0.625), 0 3em rgba(255, 255, 255, 0.5),
    -2.24em 2.25em rgba(255, 255, 255, 0.375), -3em 0 rgba(255, 255, 255, 0.25),
    -2.25em -2.25em rgba(255, 255, 255, 0.125);
  animation: ${rotate} 1.5s linear infinite;

  @media (max-width: 600px) {
    width: 0.8em;
    height: 0.8em;
    box-shadow: 0 -1.5em rgba(255, 255, 255, 1),
      1.12em -1.125em rgba(255, 255, 255, 0.875), 1.5em 0 rgba(255, 255, 255, 0.75),
      1.125em 1.125em rgba(255, 255, 255, 0.625), 0 1.5em rgba(255, 255, 255, 0.5),
      -1.12em 1.125em rgba(255, 255, 255, 0.375), -1.5em 0 rgba(255, 255, 255, 0.25),
      -1.12em -1.125em rgba(255, 255, 255, 0.125);
      
  }
`;
