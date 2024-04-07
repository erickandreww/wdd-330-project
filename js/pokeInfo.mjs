// likee the product details
// this mjs will take the pokemon info separately
import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function pokeTemplate(pokemon) {
    if (pokemon.types.length !== 1) {
        return `<section class="poke-info">
        <div class="top">
            <h2>${pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h2>
            <h3>Id: ${pokemon.id}</h3>
        </div>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="mid">
            <h3>${pokemon.types[0].type.name.toUpperCase()}</h3>
            <h3>${pokemon.types[1].type.name.toUpperCase()}</h3>
        </div>
        <div class="stat">
            <h3>Status: </h3>
            <div class="stat-1">
                <p>Hp: ${pokemon.stats[0].base_stat}</p>
                <p>Attack: ${pokemon.stats[1].base_stat}</p>
                <p>Defense: ${pokemon.stats[2].base_stat}</p>
            </div>
            <div class="stat-2">
                <p>Special-attack: ${pokemon.stats[3].base_stat}</p>
                <p>Special-defense: ${pokemon.stats[4].base_stat}</p>
                <p>Speed: ${pokemon.stats[5].base_stat}</p>
            </div>
        </div>
        <div class="bot">
            <p>Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
            <p>Base Experience: ${pokemon.base_experience}</p>
        </div>`
    } else {
        return `<section class="poke-info">
        <div class="top">
            <h2>${pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}</h2>
            <h3>Id: ${pokemon.id}</h3>
        </div>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <div class="mid">
            <h3>${pokemon.types[0].type.name.toUpperCase()}</h3>
        </div>
        <div class="stat">
            <h3>Status: </h3>
            <div class="stat-1">
                <p>Hp: ${pokemon.stats[0].base_stat}</p>
                <p>Attack: ${pokemon.stats[1].base_stat}</p>
                <p>Defense: ${pokemon.stats[2].base_stat}</p>
            </div>
            <div class="stat-2">
                <p>Special-attack: ${pokemon.stats[3].base_stat}</p>
                <p>Special-defense: ${pokemon.stats[4].base_stat}</p>
                <p>Speed: ${pokemon.stats[5].base_stat}</p>
            </div>
        </div>
        <div class="bot">
            <p>Height: ${pokemon.height} | Weight: ${pokemon.weight}</p>
            <p>Base Experience: ${pokemon.base_experience}</p>
        </div>`
    }
}

export default class PokeInfo {
    constructor(pokeId, dataSource) {
        this.pokeId = pokeId;
        this.dataSource = dataSource;
    }

    async init() {
        const pokemon = await this.dataSource.getData(this.pokeId);
        console.log(pokemon);
        this.renderPokeTemplate("main", pokemon);
    }

    renderPokeTemplate(selector, pokemon) {
        this.pokemon = pokemon;
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin", pokeTemplate(this.pokemon))
    }
}