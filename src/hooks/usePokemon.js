import mockedData from '../Mocks/Pokemon-data.json';


export function UsePokemon(){
    const pokemons = mockedData.results;
    const mappedPokemon = pokemons?.map(pokemon =>({
      pokemonName: pokemon.name,
      pokemonURL: pokemon.url
    }));
  
    return {pokemons : mappedPokemon};
  }