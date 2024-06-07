import { useState, useRef, useMemo, useCallback } from "react";
import { searchPokemon, getDefault } from "../services/API";

export function usePokemon({ search, sort }) {
  const [pokemon, setPokemon] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const previousSearch = useRef(search);

  const getPokemon = useCallback(async({search}) => {
    if (search === previousSearch.current) return;
    try {
      setLoading(true);
      setError(null);
      previousSearch.current = search;
      const newData = await searchPokemon({ search });
      setPokemon(newData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  } ,[]);

  const getPokemonDefault = useCallback(async () => {
    try {
      setLoading(true);
      const newData = await getDefault();
      setPokemon(newData);
    } catch (error) {
      console.error("getPokemonDefault error", error);
    }finally{
      setLoading(false);
    }
  }, []);
  
    const sortedPokemon = useMemo(()=>{
      return sort
      ? [...pokemon].sort((a, b) => a.name.toLocaleCompare(b.name))
      : pokemon;
    }, [sort, pokemon]);


  return { pokemon: sortedPokemon, getPokemon, getPokemonDefault, loading, error };
}

// export function UseDefault(){
//   const [pokemon, setPokemon] = useState([]);

  

//   return {getPokemonDefault, pokemon};
// }