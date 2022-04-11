import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const userName = useSelector(state => state.userName);
    const [ pokemons, setPokemons ] = useState([])

    useEffect(() => {
        axios
            .get('https://pokeapi.co/api/v2/pokedex/')
            .then(answ => setPokemons(answ.data.results));
    },[])

    return (
        <div>
            <h1> <b> Pokedex </b> </h1>
            <p>Welcome <b> { userName }</b>, here you can find your favorite pokemon</p>
            {
                pokemons.map(pokemon => (
                    <li key={pokemon.name}>
                        {pokemon.name}
                    </li>
                ))
            }
        </div>
    );
};

export default Pokedex;