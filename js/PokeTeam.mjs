import { getLocalStorage } from "./utils.mjs";

function teamPokeTemplate(pokemon) {
    return `<li>
        <a href="/pokemons/index.html?pokemon=${pokemon.name}" class="team-member-img">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" alt="${pokemon.name}">
        </a>
        <h2 class="poke_name">${pokemon.name}</h2>
    </li>`
}

export default class PokeTeam {
    constructor(key, selector){
        this.key = key;
        this.selector = selector;
    }

    async init() {
        const list = getLocalStorage(this.key); 
        this.renderContent(list);
    }
    
    renderContent(list) {
        let htmlStrings = list.map((pokemon) => teamPokeTemplate(pokemon));
        document.querySelector(this.selector).innerHTML = htmlStrings.join("");
    }
}

// Create a Team page
// limit the number of pokemons in the team for 6
// add a remove pokemon from the localStorage (the team). 
// add a message qhen you try to add another pokemon to go to the team page and remove
// add a checkpoint page
// add a success page. 
// change to pokeDex
// change the icon
// construct a better interface for the PokeDex
// change the mjs and mjs of team to pokedex
// change the addtoteam to capture. 
// // seen and captured?
// a checkou page, asking the user information
// after get this information, led the user to a success page showing a card with how much pokemons he captured, his trainer level and some of his info.