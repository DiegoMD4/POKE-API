
export const searchPokemon = async ({search}) =>{
    if(search === ''){
        return null;
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


export const getDefault = async () => {
    try {
        const returnedPokemon = [];
        for (let i = 0; i < 9; i++) {
            const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 1026)}`);
            const data = await result.json();

            // Solo una URL para obtener más datos del Pokémon.
            const response = await fetch(data.forms[0].url);
            const details = await response.json();
            
            const defPokemon = {
                id: data.id,
                name: data.name,
                sprite: details.sprites.front_default,
                url: data.species.url
            };

            returnedPokemon.push(defPokemon);
        }
        return returnedPokemon;
    } catch (error) {
        console.error('Not possible to connect to the API', error);
        throw new Error('Not possible to connect to the API');
    }
};



 // const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=9`);
        // const data = await response.json();

        // const pokemon = await Promise.all(data.results.map(async (pokemon) =>{
        //     const response = await fetch(pokemon.url);
        //     const data = await response.json();

        //     return {
        //         id: data.id,
        //         name: pokemon.name,
        //         url: pokemon.url,
        //         sprite: data.sprites.front_default
        //     };
        // }));
        // console.log(pokemon);
        // return pokemon;