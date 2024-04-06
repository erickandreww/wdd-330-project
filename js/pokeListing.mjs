import { renderListWithTemplate } from "./utils.mjs";

function pokeCardTemplate(poke) {
    const path = poke.pokemon;
    return `
    <li class="product-card">
        <a href="../product_pages/index.html?product=${path.name}">
            <img src="" alt="${path.name}" />
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