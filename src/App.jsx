import './App.css';
import { Pokemon } from './components/Pokemon';
import { UsePokemon } from './hooks/usePokemon';



function App() {

const {pokemons} = UsePokemon();

  return (
    <div className="page">
      <header>
        <h1>Pokedex</h1>
        <form action="" className="form">
          <input name="query" type="text" placeholder="Bulbasaur, Charmander, Squirtle..." />
          <input type="checkbox" />
          <button  type="submit">Buscar</button>
        </form>

      </header>
      <main>
        <Pokemon pokemon={pokemons}></Pokemon>
      </main>
    </div>
  );
}

export default App;
