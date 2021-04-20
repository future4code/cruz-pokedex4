import React from "react";
import { useHistory } from "react-router-dom";
import { goToHomePage } from "../Routes/Coordinator";

const PokedexPage = () => {
  const history = useHistory();
  return (
    <div>
      <h1>pokedex</h1>

      <button onClick={() => goToHomePage(history)}>HOME</button>
    </div>
  );
};

export default PokedexPage;
