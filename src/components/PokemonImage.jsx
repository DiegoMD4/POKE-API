import { useState,useEffect } from "react";

export function PokemonImage({url}){
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
        <img src={image}/>
    );
}