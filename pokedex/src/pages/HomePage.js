import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../Routes/Coordinator";
import styled from "styled-components";
import PokeCard from "../components/PokeCard";
import Header from "../components/Header";
import Pokedex from "../components/img/Pokedex.jpg";
import PokemonsContext from "../contexts/PokemonsContext";
import Tilt from 'react-parallax-tilt';

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
  margin-top: 37px;
  padding: 20px;
`;

const HomePage = () => {
  const history = useHistory();
  const {pokemons} = useContext(PokemonsContext)
  const button = <button onClick={() => {goToPokedexPage(history)}}>POKEDEX</button>

  return (
    <div>

      <Header button = {button}/>
      
      <GridCardContainer>
        {pokemons &&
          pokemons.map((poke) => {
            return <Tilt><PokeCard pokemon={poke} /></Tilt>;
          })}
      </GridCardContainer>
    </div>
  );
};

export default HomePage;
