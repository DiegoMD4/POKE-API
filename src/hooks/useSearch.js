import { useState, useEffect, useRef } from "react";

export function useSearch(){
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null);
    const isFirstInput = useRef(true);
    
    useEffect(()=>{
      if(isFirstInput.current){
        isFirstInput.current = search === '';
        return;
      }
      if(search === ""){
        setError('Input cant be in blank. Write a specific name to get the pokemon info');
        return;
       }
      //  if(search.match(/^\d+$/)){
      //   setError('Numbers are not valid in this input');
      //   return;
      //  }
       if(search.length < 3 ){
        setError('Max 3 characters');
        return;
       }
    
       setError(null);
    }, [search]);
  
    return {search, error, updateSearch};
  }