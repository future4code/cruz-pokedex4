import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { goToDetailsPage } from "../Routes/Coordinator";
import PokemonsContext from "../contexts/PokemonsContext";

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
  const history = useHistory();
  const { pokemons, setPokemons, pokedex, setPokedex } = useContext(PokemonsContext)
  
  const addToPokedex = () => {
    const newPokedex = [...pokedex]
    pokemons.forEach(pkm => {
      if (pkm.id === props.pokemon.id) {
        newPokedex.push(pkm)
      }
    })
        
    const pokemonsList = pokemons.filter(pkm => {
      return pkm.id !== props.pokemon.id
    })
    
    setPokedex(newPokedex)
    setPokemons(pokemonsList)
  }

  const removeFromPokedex = () => {
    const newPokedex = [...pokedex]
    const removePokemon = pokedex.findIndex(pkm => {
      return pkm.id === props.pokemon.id
    })
    newPokedex.splice(removePokemon, 1)
    const pokemonsList = pokemons.filter(pkm => true)

    setPokedex(newPokedex)
    setPokemons(pokemonsList)
    console.log(removePokemon)
  }

  console.log(pokedex)

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
          <button onClick={() => {goToDetailsPage(history, props.pokemon.id)}}>
            Ver detalhes
          </button>
          <button onClick={removeFromPokedex}>Remover</button>
        </ButtonContainer>
      </CardContainer>
    </>
  );
};
export default PokeCard;
