import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  background-color: green;
`;
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 250px;
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
    width: 110px;
    height: 40px;
    border-radius: 10px;
    margin: 5px;
    color: white;
    border: none;
  }
`;
const Card = styled.div`
  background-color: #32bad9;
  width: 200px;
  height: 150px;
  border-radius: 10px;
  padding: 5px;
`;

export const PokeCard = () => {
  return (
    <>
      <Container>
        <CardContainer>
          <Card></Card>
          <ButtonContainer>
            <button>Adicionar para pokedex</button>
            <button>Ver detalhes</button>
          </ButtonContainer>
        </CardContainer>
      </Container>
      ;
    </>
  );
};
export default PokeCard;
