// import noResults from '../Mocks/no-results.json';
export const searchPokemon = async ({search}) =>{
    if(search === ''){
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`);
        const data = await response.json();

        const pokemon = await Promise.all(data.results.map(async (pokemon) =>{
            const response = await fetch(pokemon.url);
            const data = await response.json();

            return {
                id: data.id,
                name: pokemon.name,
                url: pokemon.url,
                sprite: data.sprites.front_default
            };
        }));
        console.log(pokemon);
        return pokemon;
    }

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