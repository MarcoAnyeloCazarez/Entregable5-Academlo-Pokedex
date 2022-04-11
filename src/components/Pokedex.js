import React from 'react';
import { useSelector } from 'react-redux';

const Pokedex = () => {
    const userName = useSelector(state => state.userName)

    return (
        <div>
            <h1> <b> Pokedex </b> </h1>
            <p>Welcome <b> { userName }</b>, here you can find your favorite pokemon</p>
        </div>
    );
};

export default Pokedex;