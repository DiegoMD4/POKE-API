function ListOfPokemon({pokemon}){
    return(
        <ul className='Card'>
          {pokemon?.map(element =>(
            <li className='pokemon' key={element.id}>
              <img src={element.sprite} alt={element.name} />
              <h3>{element.name}</h3>
              <a href={element.url}>{element.url}</a>
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