import './App.css';
import axios from 'axios'
import GetPokemon from './components/GetPokemon';
import { useEffect, useState } from 'react';

function App() {
    const [pokemon, setPokemon] = useState([])

    const getPokemon =  () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(res=>setPokemon(res.data.results))
        .catch(err=>console.log(err))
      }
    // console.log(pokemon)
    // useEffect(getPokemon, [])

  return (
    <div className="App">
      <button onClick={getPokemon}>Fetch Pokemon</button>
        < GetPokemon pokemon={pokemon}/>
    </div>
  );

}
export default App;
