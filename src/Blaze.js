import React, { useState, useEffect } from 'react';

const Blaze = () => {
    const [Blaze, setBlaze] = useState([]);

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon/6/')
            .then(res => res.json())
            .then(blaze => {
                setBlaze(prev => [...prev, blaze]);
            });

        return () => {
            //clean up
        }
    }, []);

    function ColorChange(e) {
        e.preventDefault();

    }


    return (
        <ul className="pokemon-blaze">
            {Blaze.map(blaze => {
                console.log(blaze);

                return (
                    <li key={blaze.toString()}>
                        <p>Name - {blaze.name}</p>
                        <p>ID : {blaze.id}</p>
                        <p>
                            <img src={blaze.sprites.back_default} alt="" />
                            <img src={blaze.sprites.bakc_skiny} alt="" />
                            <img src={blaze.sprites.front_default} alt="" />
                            <img src={blaze.sprites.fornt_skiny} alt="" /></p>
                        <p>Weight : {blaze.weight}</p>
                        <p>Height : {blaze.height}</p>
                    </li>
                )
            }
            )}
        </ul>
    )


}




export default Blaze;