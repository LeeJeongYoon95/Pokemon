import React, { useEffect, useState } from 'react';
import './Pokemons.css';


const Pokemon = ({ id }) => {
    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => res.json())
            .then(pokemon => {
                setPokemon(pokemon);
            });

        return () => {
            //clean up   
        }
    }, []);

    if (!pokemon) {
        return <div>loading</div>;
    }

    return (
        <li>
            <p>Name - {pokemon.name}</p>
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


export default Pokemon;