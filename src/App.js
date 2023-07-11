import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './components/pokemon';

function App() {
  const [pokemon, setPokemon] = useState({})
  const getPokemon = () => {
      axios.get('https://pokeapi.co/api/v2/pokemon?limit=807&offset=0')
      .then(res=>setPokemon(res))
      .catch(err=>console.log(err))
  }

  useEffect(getPokemon, [])

  return (
    <div className="App">
      <button onClick={getPokemon}>Fetch Pokemon</button>
      <Pokemon/>
    </div>
  );
}

export default App;
