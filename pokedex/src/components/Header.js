import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../Routes/Coordinator";

const Header = ({ leftButtonFunction, title, showRightButton }) => {
  const History = useHistory()

  const leftButtonTitle = () => {
    switch (title) {
      case "Lista de Pokemons": 
        return "Pokedex";
      case "Pokedex": 
        return "Voltar para lista de Pokemons";
      default: return "Voltar"
    }
  }

  return (
    <HeaderPage>

      <LeftButton onClick={leftButtonFunction}>
          { leftButtonTitle() }
      </LeftButton>

        <h1>{title}</h1>

      { showRightButton && (
        <RightButton onClick={ () => goToPokedexPage() }>
          Pokedex
        </RightButton>
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
`

const LeftButton = styled.button`
  position: absolute;
  left: 20px;
`
  
const RightButton = styled.button`
  position: absolute;
  right: 20px;
`