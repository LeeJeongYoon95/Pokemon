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
            }

            else if (isString) {
                setPokemonInfo(prev => [...prev, pokemonInfo])
            } else {
                alert('해당 포켓몬은 존재하지 않습니다.');
            }
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