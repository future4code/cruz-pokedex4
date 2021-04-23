import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import PokemonsContext from "../contexts/PokemonsContext";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  width: 100%;
  height: 100vh;
`;

const PhotoContainer = styled.div`
  & > div:nth-child(1) {
    display: flex;
    background-color: pink;
    height: 220px;
    margin: 50px;
    width: 220px;
  }

  & > div:nth-child(2) {
    display: flex;
    background-color: pink;
    height: 220px;
    margin: 50px;
    width: 220px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  background-color: red;
  justify-content: center;

  margin: 20px;
`;

const TypeMovesContainer = styled.div`
  & > div:nth-child(1) {
    background-color: yellow;
    height: 100px;
    margin: 20px;
  }

  & > div:nth-child(2) {
    background-color: brown;
    height: 500px;
    margin: 20px;
  }
`;

const DetailsPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [hp, setHp] = useState("");
  const [attack, setAttack] = useState("");
  const [defense, setDefense] = useState("");
  const [specialAttack, setSpecialAttack] = useState("");
  const [specialDefense, setSpecialDefense] = useState("");
  const [speed, setSpeed] = useState("");

  const params = useParams();

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch(() => {});
  });
  console.log(pokemon);

  return (
    <>
      <Header />
      <GridContainer>
        <PhotoContainer>
          <div>
            <img src={pokemon.sprites.front_default} />
          </div>
          <div>
            <img src={pokemon.sprites.back_default} />
          </div>
        </PhotoContainer>
        <StatsContainer>
          <h1>Poderes</h1>
          <div>
            <p>Hp:</p>
            <p>Attack:</p>
            <p>Defense:</p>
            <p>Special-attack:</p>
            <p>special-defense:</p>
            <p>speed:</p>
          </div>
        </StatsContainer>
        <TypeMovesContainer>
          <div></div>
          <div></div>
        </TypeMovesContainer>
      </GridContainer>
    </>
  );
};

export default DetailsPage;
