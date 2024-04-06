import { renderListWithTemplate } from "./utils.mjs";
import ExternalServices from "./externalServices.mjs";

function pokeCardTemplate(poke) {
    const newPath = poke.pokemon;
    return `
    <li class="poke-card">
        <a href="/pokemons/index.html?pokemon=${newPath.name}">
            <img src="" alt="${newPath.name}" />
            <h3>${newPath.name}</h3>
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