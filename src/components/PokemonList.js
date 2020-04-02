import React, { useEffect, useState } from 'react';


const Pokemon = ({ info }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${info}`)
            .then(res => res.json())
            .then(pokemon => {
                setPokemon(pokemon);
            });

        return () => {
            //clean up   
        }
    }, []);

    if (!pokemon) {
        return <div></div>;
    }

    return (
        <li>
            <p>{pokemon.name}</p>
            <p>ID : {pokemon.id}</p>
            <p>
                <img src={pokemon.sprites.back_default} alt="" />
                <img src={pokemon.sprites.back_shiny} alt="" />
                <img src={pokemon.sprites.front_default} alt="" />
                <img src={pokemon.sprites.front_shiny} alt="" /></p>
            <p>Weight : {pokemon.weight}</p>
            <p>Height : {pokemon.height}</p>
        </li>

    )

}

const PokemonList = ({ pokemonInfo }) => (
    <ul>
        {pokemonInfo.map((info, i) => {
            return <Pokemon info={info} key={info + i + Date.now()}></Pokemon>;
        })}
    </ul>
);


export default PokemonList;