import React, { useState, useEffect } from 'react';

const Venusaur = () => {
    const [Venusaur, setVenusaur] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/venusaur/')
            .then(res => res.json())
            .then(venusaur => {
                setVenusaur(prev => [...prev, venusaur]);
            });

        return () => {
            //clean up

        }
    }, []);



    return (
        <ul className="pokemon-venusaur">
            {Venusaur.map(venusaur => {
                console.log(venusaur);

                return (
                    <li key={venusaur.toString()}>
                        <p>Name - {venusaur.name}</p>
                        <p>ID : {venusaur.id}</p>
                        <p>
                            <img src={venusaur.sprites.back_default} alt="" />
                            <img src={venusaur.sprites.back_shiny} alt="" />
                            <img src={venusaur.sprites.front_default} alt="" />
                            <img src={venusaur.sprites.front_shiny} alt="" /></p>
                        <p>Weight : {venusaur.weight}</p>
                        <p>Height : {venusaur.height}</p>
                    </li>
                )
            }
            )}
            <button>change</button>
        </ul>


    )


}




export default Venusaur;