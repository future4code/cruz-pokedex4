import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import PokemonsContext from "../contexts/PokemonsContext";

const foil = keyframes`
  0%{background-position:2% 0%}
  50%{background-position:99% 100%}
  100%{background-position:2% 0%}
`

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
  position: relative;

  :hover {
    :before {
      content: '';
      position: absolute;
      top: 0;
      border-radius: 10px;
      opacity: .3;
      pointer-events: none;

      width: 100%;
      height: 100%;

      background: linear-gradient(134deg, #e30b0b, #6c169b, #195fec, #19b270, #df50d3, #ffffff, #f338d4, #12b451, #2754e1, #7311aa, #e61c1c);
    background-size: 2200% 2200%;

    animation: ${foil} 4s ease infinite;
    }
  }
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
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(PokemonsContext)

  const addToPokedex = () => {
    let newPokedex = [...pokedex]
    pokemons.forEach(pkm=> {
      if(pkm.name === props.pokemon.name) {
        newPokedex.push(pkm)
      }
    })
    let newPokeList = pokemons.filter(pkm => {
      return pkm.name !== props.pokemon.name
    })
    setPokemons(newPokeList)
    setPokedex(newPokedex)
    console.log('lista pokemon', newPokeList)
  console.log('lista pokedex', newPokedex)
  }

  console.log('lista pokemon', pokemons)
  console.log('lista pokedex', pokedex)

  return (
    <>
      <CardContainer>
        <Card>
          <img
            src={props.pokemon.sprites.other["official-artwork"].front_default}
          />
        </Card>
        <ButtonContainer>
          <button onClick={addToPokedex}>Adicionar para pokedex</button>
          <button>Ver detalhes</button>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};
export default PokeCard;
