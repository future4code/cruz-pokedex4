import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinator";
import Header from "../components/Header";
import styled from "styled-components";
import Pokedex from "../components/img/Pokedex.jpg";

const GridCardContainer = styled.div`
  background-image: url(${Pokedex});
  background-attachment: scroll;
  background-repeat: repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 15px;
  row-gap: 30px;
  justify-items: center;
  padding: 20px;
  width: 100%;
  height: 100vh;
`;

const PokedexPage = () => {
  const history = useHistory();
  return (
    <div>
      <Header
        title={"Pokedex"}
        leftButtonFunction={() => goToHomePage(history)}
      />

      <GridCardContainer />
    </div>
  );
};

export default PokedexPage;
