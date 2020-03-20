import React, { useEffect, useState } from 'react';

const Ditto = () => {
    const [Ditto, setDitto] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/132/')
            .then(res => res.json())
            .then(ditto => {
                setDitto(prev => [...prev, ditto]);
            });

        return () => {
            //clean up   
        }
    }, []);



    return (
        <ul className="pokemon-ditto">
            {Ditto.map(ditto => {
                console.log(ditto);
                return (
                    <li key={ditto.toString()}>
                        <p>Name - {ditto.name}</p>
                        <p>ID : {ditto.id}</p>
                        <p>
                            <img src={ditto.sprites.back_default} alt="" />
                            <img src={ditto.sprites.bakc_skiny} alt="" />
                            <img src={ditto.sprites.front_default} alt="" />
                            <img src={ditto.sprites.fornt_skiny} alt="" /></p>
                        <p>Weight : {ditto.weight}</p>
                        <p>Height : {ditto.height}</p>
                    </li>
                )
            })
            }
        </ul>
    )

}


export default Ditto;