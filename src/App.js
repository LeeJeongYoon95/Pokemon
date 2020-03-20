import React from 'react';
import Kakao from './components/Kakao.js';
import kakaoFriends from './constants/kakao.json';
import Pokemons from './Ditto.js';
import './App.css';
import './Pokemons.css';
import Ditto from './Ditto.js';
import Venusaur from './Venusaur.js';
import Blaze from './Blaze.js';

function App() {

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {/* {kakaoFriends.list.map((friend, i) => {
          return (<Kakao friend={friend} key={i}></Kakao>)
        })} */}
        <div>
          <Ditto></Ditto>
          <Venusaur></Venusaur>
          <Blaze></Blaze>
        </div>
      </main>
    </div>
  );
}

export default App;
