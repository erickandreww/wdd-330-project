import { getLocalStorage } from "./utils.mjs";

function pokedexMemberTemplate(pokemon) {
    return `<li>
        <a href="/pokemons/index.html?pokemon=${pokemon.name}" class="member-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        </a>
        <h2 class="poke_name">${pokemon.name}</h2>
        <h3>Id: ${pokemon.id}</h3>
    </li>`
}

export default class Pokedex {
    constructor(key, selector){
        this.key = key;
        this.selector = selector;
    }

    async init() {
        const list = getLocalStorage(this.key); 
        this.renderContent(list);
    }
    
    renderContent(list) {
        let htmlStrings = list.map((pokemon) => pokedexMemberTemplate(pokemon));
        document.querySelector(this.selector).innerHTML = htmlStrings.join("");
    }
}



// add a pokemon total captured (in the pokedex/localStorage)
// add a alert that alert the user that Pokémon has already been captured.
// add some html introduction and text to the pokePage
// add some css for them
// construct a better interface for the PokeDex
// // seen and captured?
// a checkout page, asking the user information
// after get this information, led the user to a success page showing a card with how much pokemons he captured, his trainer level and some of his info.

// solve the pokemon images (to not show that pokemons);