function ListOfPokemon({pokemon}){
    return(
        <ul className='Card'>
          {pokemon?.map(element =>(
            <li className='pokemon' key={element.pokemonName}>
              <h3>{element.pokemonName}</h3>
              <a href={element.pokemonurl}>{element.pokemonURL}</a>
            </li>
          ))}
        </ul>
    );
}

function NoResults(){
    return(
        <p>No results</p>
    );
}


export function Pokemon({pokemon}){
    const hasPokemon = pokemon?.length > 0;
    return(
        hasPokemon? ListOfPokemon({pokemon}) : NoResults()
    );
}