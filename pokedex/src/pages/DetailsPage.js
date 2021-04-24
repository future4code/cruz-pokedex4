import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import PokemonsContext from "../contexts/PokemonsContext";
import axios from "axios";

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
  const history = useHistory();
  const params = useParams();
  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${params.id}`)
      .then((res) => {
        setPokemon(res.data);
      })
      .catch(() => {});
  }, []);

  console.log(pokemon);

  const getMovesNames = () => {
    let nameMove =
      pokemon.moves &&
      pokemon.moves.map((move) => {
        console.log(move);
        return move.move.name;
      });

    let moveNames = [];
    moveNames = nameMove;

    return [moveNames];
  };

  console.log(getMovesNames());

  const getSelectedMoves = () => {
    let selectedMoves = [];

    for (let i = 0; i <= 5; i++) {
      pokemon.moves && selectedMoves.push(getMovesNames()[0][i]);
    }
    const componentsSelected = selectedMoves.map((move) => {
      return <p>{move}</p>;
    });

    return componentsSelected;
  };

  const getTypes = () => {
    console.log(pokemon.types);
    let pokemonsType =
      pokemon.types &&
      pokemon.types.map((type) => {
        return <p>{type.type.name}</p>;
      });

    return pokemonsType;
  };

  getTypes();
  return (
    <>
      <Header leftButtonFunction={() => history.goBack()} showRightButton />
      <GridContainer>
        <PhotoContainer>
          <div>
            <img
              alt="foto"
              src={pokemon.sprites && pokemon.sprites.front_default}
            />
          </div>
          <div>
            <img
              alt="foto"
              src={pokemon.sprites && pokemon.sprites.back_default}
            />
          </div>
        </PhotoContainer>
        <StatsContainer>
          <h1>Poderes</h1>
          <div>
            {pokemon.stats &&
              pokemon.stats.map((stat) => {
                return (
                  <p key={stat.stat.name}>
                    {stat.stat.name}: <span>{stat.base_stat}</span>
                  </p>
                );
              })}
          </div>
        </StatsContainer>
        <TypeMovesContainer>
          <div>{getTypes()}</div>
          <div>{getSelectedMoves()}</div>
        </TypeMovesContainer>
      </GridContainer>
    </>
  );
};

export default DetailsPage;
