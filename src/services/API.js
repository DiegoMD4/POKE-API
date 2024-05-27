import noResults from '../Mocks/no-results.json';
export const searchPokemon = async ({search}) =>{
    if(search === '') return noResults;

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${search.toLowerCase()}`);
        const data = await response.json();
        const pokemon = [{
            id: data.id,
            name: data.name,
            url: data.pokemon.url,
            sprite: data.sprites.front_default
        }];
        return pokemon;

    } catch (error) {
        throw new Error('Error searching pokemon');
    }
};