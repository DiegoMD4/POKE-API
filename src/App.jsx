import { Pokemon } from './components/Pokemon';
import pokemonResults from './Mocks/Pokemon-data.json';
import './App.css';


function App() {

   const pokemon = pokemonResults.results;


  return (
    <div className="page">
      <header>
        <h1>Pokedex</h1>
        <form action="" className="form" >
          <input name="query" type="text" placeholder="Bulbasaur, Charmander, Squirtle..." />
          <input type="checkbox" />
          <button type="submit">Buscar</button>
        </form>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </header>
      <main>
        {/* {loading ? <p>Cargando...</p> : <Movies movies={movies} />} */}
        {<Pokemon pokemon={pokemon}></Pokemon>}
      </main>
    </div>
  );
}

export default App;
