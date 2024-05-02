export const getElements = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/?limit=100000&offset=0`
  );
  const json = await response.json();

  return json.results;
};

