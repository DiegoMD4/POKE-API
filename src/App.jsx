import './App.css';
import { Pokemon } from './components/Pokemon';
import { UsePokemon } from './hooks/usePokemon';
import { useState, useEffect} from 'react';


function useSearch(){
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(()=>{
    if(search === ""){
      setError('Input cant be in blank');
      return;
     }
     if(search.match(/^\d+$/)){
      setError('Numbers are not valid in this input');
      return;
     }
     if(search.length < 3 ){
      setError('Input must be max 3 characters');
      return;
     }
  
     setError(null);
  }, [search]);

  return {search, error, updateSearch};
}

function App() {

  const { pokemons } = UsePokemon();
  const {search, updateSearch, error} = useSearch();

  
  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleChange = (event) =>{

    updateSearch(event.target.value);
  };


  
  

  return (
    <div className="page">
      <header>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit} action="" className="form">
          <input onChange={handleChange} value={search} type="text" placeholder="Bulbasaur, Charmander, Squirtle..." />
          <input type="checkbox" />
          <button type="submit">Buscar</button>
        </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        <Pokemon pokemon={pokemons}></Pokemon>
      </main>
    </div>
  );
}

export default App;