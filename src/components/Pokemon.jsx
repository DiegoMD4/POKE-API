import { PokemonImage } from "./PokemonImage";

function ListPokemon({pokemon}) {
    return (
      <ul className="PokeCard">
      {
        pokemon.map(poke => (
          <li className="pokemon" key={poke.name}>
            <h3>{poke.name}</h3>
            <PokemonImage url={poke.url}></PokemonImage>
            <a href={poke.url}>{poke.url}</a>
          </li>
        ))
      }
    </ul>
    );
  }

function NoResults(){
  return(
    <p>No pokemon were found</p>
  );
}

export function Pokemon({pokemon}){
  const hasElements = pokemon?.length >0;
  return(
    
      hasElements? ListPokemon({pokemon}) : NoResults()
    
  );
}