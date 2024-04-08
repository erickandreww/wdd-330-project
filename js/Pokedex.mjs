import { getLocalStorage } from "./utils.mjs";

function pokedexMemberTemplate(pokemon) {
    return `<li>
        <a href="/pokemons/index.html?pokemon=${pokemon.name}" class="member-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        </a>
        <h2 class="poke_name">${pokemon.name}</h2>
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

// change the icon of pokeball to pokedex
// adjust the Catch! button
// construct a better interface for the PokeDex
// // seen and captured?
// don't allow add the same pokemon to pokedex. 

// a checkout page, asking the user information
// after get this information, led the user to a success page showing a card with how much pokemons he captured, his trainer level and some of his info.
// solve the pokemon images (to not show that pokemons);