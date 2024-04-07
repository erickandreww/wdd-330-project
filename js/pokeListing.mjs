import { renderListWithTemplate } from "./utils.mjs";
import ExternalServices from "./externalServices.mjs";

function pokeCardTemplate(poke) {
    const path = poke.pokemon;
    const urls = poke.pokemon.url.slice(34);
    const id = urls.slice(0, -1);
    console.log(id);
    return `
    <li class="poke-card">
        <a href="/pokemons/index.html?pokemon=${path.name}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${path.name}" />
            <h3>${path.name}</h3>
        </a>
    </li>`;
}

export default class PokeListing {
    constructor(category, dataSource, listElement) {
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getType(this.category);
        renderListWithTemplate(pokeCardTemplate, this.listElement, list);
    }

}