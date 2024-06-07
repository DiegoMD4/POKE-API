import './App.css';
import { Pokemon } from './components/Pokemon';
import { usePokemon} from './hooks/usePokemon';
import { useState, useCallback, useEffect} from 'react';
import { useSearch } from './hooks/useSearch';
import debounce from 'just-debounce-it';



function App() {
  const [sort, setSort] = useState(false);

  const {search, updateSearch, error} = useSearch();
  const { pokemon, getPokemon , loading, getPokemonDefault} = usePokemon({search, sort});

  const debouncedGetPokemon = useCallback(debounce(search =>{
    getPokemon({search});
  }, 400), [getPokemon]);


  
  const handleSubmit = (event) => {
    event.preventDefault();
    getPokemon({search});
  };

  const handleChange = (event) =>{
    const newSearch = event.target.value;
    updateSearch(newSearch);
    debouncedGetPokemon(newSearch);
  };


  const handleSort = () =>{
    setSort(!sort);
  };
  

  useEffect(() => {
    const firstCharge = async () => {
      try {
        await getPokemonDefault();
      } catch (error) {
        console.error('Error during firstCharge', error);
      }
    };
    firstCharge();
  }, [getPokemonDefault]);


  return (
    <div className="page">
      <header>
        <h1>Pokedex</h1>
        <form onSubmit={handleSubmit} action="" className="form">
          <input onChange={handleChange} value={search} type="text" placeholder="Bulbasaur, Charmander, Squirtle..." />
          <input onChange={handleSort} type="checkbox" checked={sort}/>
          <button type="submit">Buscar</button>
        </form>
          {error && <p style={{color: 'red'}}>{error}</p>}
      </header>

      <main>
        {loading? <p>Loading...</p> : <Pokemon pokemon={pokemon}></Pokemon>}
      </main>
    </div>
  );
}

export default App;