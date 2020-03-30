import React from 'react';



const PokemonInput = ({ handleSubmit, inputElement }) => (
    <form
        onSubmit={handleSubmit}>
        <input type="text" ref={inputElement}
            placeholder="Please enter Pokemon ID number"></input>
        <button type="submit">Add to Pokemon</button>
    </form>
);



export default PokemonInput;