import React from 'react';
import { useHistory } from 'react-router-dom';
import { goToPokedexPage } from '../Routes/Coordinator'

const HomePage = () => {
    const history = useHistory()
    return (
    <div>

    <h1>home page</h1>

    <button onClick={ () => goToPokedexPage(history)}>POKEDEX</button>

    </div>
    );
};

export default HomePage