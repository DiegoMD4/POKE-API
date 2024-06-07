import './App.css';
import { Pokemon } from './components/Pokemon';
import { usePokemon} from './hooks/usePokemon';
import { useState, useRef, useCallback, useEffect} from 'react';
import debounce from 'just-debounce-it';

function useSearch(){
  const [search, updateSearch] = useState('');
  const [error, setError] = useState(null);
  const isFirstInput = useRef(true);
  
  useEffect(()=>{
    if(isFirstInput.current){
      isFirstInput.current = search === '';
      return;
    }
    if(search === ""){
      setError('Input cant be in blank');
      return;
     }
    //  if(search.match(/^\d+$/)){
    //   setError('Numbers are not valid in this input');
    //   return;
    //  }
     if(search.length < 3 ){
      setError('Max 3 characters');
      return;
     }
  
     setError(null);
  }, [search]);

  return {search, error, updateSearch};
}

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