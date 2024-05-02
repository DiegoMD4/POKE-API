import './App.css';
import { useState} from 'react';
import { usePokemon } from './hooks/usePokemon';
import { Pokemon } from './components/Pokemon';

function App() {
  const [search, setSearch] = useState('');
  const {data} = usePokemon();

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const filteredData = data.filter(pokemon => pokemon.name.includes(search));

  return (
    <div className="page">
      <header>
        <h1>Pokedex</h1>
        <form action="" className="form">
          <input name="query" type="text" placeholder="Bulbasaur, Charmander, Squirtle..." onChange={handleSearch} />
          <input type="checkbox" />
          <button  type="submit">Buscar</button>
        </form>
      </header>
      <main>
        {<Pokemon filteredData={filteredData}></Pokemon>}
      </main>
    </div>
  );
}

export default App;
