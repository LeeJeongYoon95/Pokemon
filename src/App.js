import React, { useState, useRef } from 'react';
import Kakao from './components/Kakao.js';
import kakaoFriends from './constants/kakao.json';
import './App.css';
import './Pokemons.css';
import Pokemon from './Pokemon.js';
import Venusaur from './Venusaur.js';
import Blaze from './Blaze.js';



function App() {
  const [pokemonId, setPokemonId] = useState([1, 2, 3]);
  const inputElement = useRef(null);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* {kakaoFriends.list.map((friend, i) => {
          return (<Kakao friend={friend} key={i}></Kakao>)
        })} */}
        <form
          onSubmit={e => {
            e.preventDefault();
            const pokemonId = Number(inputElement.current.value);
            const isNumber = typeof pokemonId === 'number';
            if (isNumber)
              if (pokemonId < 807)
                setPokemonId(prev => [...prev, inputElement.current.value])
          }}>
          <input type="text" ref={inputElement}
            placeholder="Please enter Pokemon ID number"></input>
          <button type="submit">Add to Pokemon</button>
        </form>

        <div>
          {pokemonId.map((id, i) => {
            return <Pokemon id={id} key={id + i}></Pokemon>;
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
