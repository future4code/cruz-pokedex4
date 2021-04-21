import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { goToPokedexPage } from "../Routes/Coordinator";
import styled from "styled-components";
import PokeCard from "../components/PokeCard";
import Header from "../components/Header";
import Pokedex from "../components/img/Pokedex.jpg";
import axios from "axios";

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

  const [pokeName, setPokeName] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
      .then((res) => {
        setPokeName(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (pokeName.length) {
      pokeName.forEach((item) => {
        axios
          .get(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
          .then((res) => {
            setPokemons((prev) =>
              [...prev, res.data].sort((a, b) => a.id - b.id)
            );
          })
          .catch((err) => {
            console.log(err);
          });
      });
    }
  }, [pokeName]);

  return (
    <div>
      <Header />
      <button onClick={() => goToPokedexPage(history)}>POKEDEX</button>
      <GridCardContainer>
        {pokemons &&
          pokemons.map((poke) => {
            return <PokeCard pokemon={poke} />;
          })}
      </GridCardContainer>
    </div>
  );
};

export default HomePage;
