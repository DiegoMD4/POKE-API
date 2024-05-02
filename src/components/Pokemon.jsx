import { useEffect, useState } from "react";
export function Pokemon({filteredData}){
    return(
        <ul className='PokeCard'>
        {filteredData? filteredData.map(pokemon => (
        <li className='pokemon' key={pokemon.name}>
          <h3>{pokemon.name}</h3>
          <PokemonImage url={pokemon.url} name={pokemon.name}></PokemonImage>
          <a href={pokemon.url}>{pokemon.url}</a>
        </li>)) 
        : <h1>No hay data</h1>}
        </ul>
    );
}


function PokemonImage({url, name}){
    const [image, setImage] = useState('');

    useEffect(() => {
      const getImage = async()=>{
        const response = await fetch(url);
        const data = await response.json();
        return data.sprites.front_default;
      };
      getImage().then(res=> setImage(res));
    }, [url]);
    
    return(
        <img src={image} alt={name}/>
    );
}