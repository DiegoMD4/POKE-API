import { useState, useEffect } from "react";
import { getElements } from "../services/pokemon";
export function usePokemon() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getElements().then((res) => setData(res));
  }, []);

  return { data };
}
