import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../Routes/Coordinator";
import Pokeboll from "../components/img/Pokeboll.png";

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const History = useHistory();

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokemons":
        return "Pokedex";
      case "Pokedex":
        return "Lista de Pokemons";
      default:
        return "Voltar";
    }
  };

  return (
    <HeaderPage>
      <LeftButton onClick={leftButtonFunction}>{leftButtonTitle()}</LeftButton>
      <img src={Pokeboll} />
      <h1>{title}</h1>

      {showRightButton && (
        <RightButton onClick={() => goToPokedexPage()}>Pokedex</RightButton>
      )}
    </HeaderPage>
  );
};

export default Header;

const HeaderPage = styled.header`
  height: 60px;
  background: #d92525;
  width: 100%;
  top: 0;
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  & > img {
    width: 65px;
    height: 65px;
    cursor: pointer;
    position: absolute;
    margin-right: 92%;
  }
  & > button:hover {
    transition: all 0.5s ease-in;
    transition-delay: 0.05s;
    color: red;
  }
`;

const LeftButton = styled.button`
  position: absolute;
  left: 20px;
  background-color: rgb(226, 181, 0);
  width: 250px;
  height: 35px;
  border-radius: 10px;
  border-style: none;
  cursor: pointer;
  font-weight: bold;
  color: green;
`;

const RightButton = styled.button`
  position: absolute;
  right: 20px;
`;
