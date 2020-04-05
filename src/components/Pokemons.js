import React, { useEffect, useState, useRef } from 'react';
import './Pokemons.css';
import PokemonInput from './PokemonInput';
import PokemonList from './PokemonList';



const Pokemon = () => {

    const [pokemonInfo, setPokemonInfo] = useState([1, 2, 3]);
    const inputElement = useRef(null);

    const handleSubmit = e => {
        e.preventDefault();
        const pokemonInfo = inputElement.current.value;
        const isNumber = typeof Number(pokemonInfo) === 'number';
        const isString = typeof pokemonInfo === 'string';

        if (isNumber) {
            if (pokemonInfo < 807) {
                setPokemonInfo(prev => [...prev, pokemonInfo])
                return
            }
        }
        if (isString) {
            setPokemonInfo(prev => [...prev, pokemonInfo])
            return
        }

    }

    return (
        <React.Fragment>
            <PokemonInput handleSubmit={handleSubmit}
                inputElement={inputElement}
            ></PokemonInput>
            <PokemonList pokemonInfo={pokemonInfo}></PokemonList>
        </React.Fragment>
    );

}


export default Pokemon;