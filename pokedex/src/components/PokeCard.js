import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 246px;
  height: 262px;
  align-items: center;
  justify-content: center;
  background-color: white;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  box-sizing: border-box;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  & > button:nth-child(1) {
    background-color: #22a940;
  }

  & > button:nth-child(2) {
    background-color: #2299a9;
  }

  & > button {
    background-color: red;
    width: 102px;
    height: 40px;
    border-radius: 6px;
    margin: 5px;
    color: white;
    border: none;
    z-index: 100;
    cursor: pointer;
  }
`;
const Card = styled.div`
  background-color: #32bad9;
  width: 204px;
  height: 167px;
  border-radius: 10px;
  padding: 5px;
  display: grid;
  justify-content: center;
  align-items: center;
  img {
    width: 150px;
  }
`;

export const PokeCard = (props) => {
  return (
    <>
      <CardContainer>
        <Card>
          <img
            src={props.pokemon.sprites.other["official-artwork"].front_default}
          />
        </Card>
        <ButtonContainer>
          <button>Adicionar para pokedex</button>
          <button>Ver detalhes</button>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};
export default PokeCard;
