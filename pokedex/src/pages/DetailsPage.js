import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
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
  const history = useHistory();
  const params = useParams();
  const {pokemons} = useContext(PokemonsContext)
  const index = (params.id-1)

  return (
    <>
      <Header leftButtonFunction={ () => history.goBack() } showRightButton />
      <GridContainer>
        <PhotoContainer>
          <div>
            
            <img alt="foto" src={pokemons.length && pokemons[index].sprites.front_default} />
          </div>
          <div>
            <img alt="foto" src={pokemons.length && pokemons[index].sprites.back_default} />
          </div>
        </PhotoContainer>
        <StatsContainer>
          <h1>Poderes</h1>
          <div>
          {pokemons.length &&
              pokemons[index].stats.map(stat => {
                return(
                  <p key={stat.stat.name}>{stat.stat.name}: <span>{stat.base_stat}</span></p>
                )
              })
            }
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
