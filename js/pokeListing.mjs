import { renderListWithTemplate } from "./utils.mjs";
import ExternalServices from "./externalServices.mjs";

function pokeCardTemplate(poke) {
    const path = poke.pokemon;
    const test = poke.pokemon.name;
    const urls = poke.pokemon.url.slice(34);
    const id = urls.slice(0, -1);
    const exilated = ["cramorant-gulping", "cramorant-gorging", "eevee-starter", "kommo-o-totem", "koraidon-limited-build", "koraidon-sprinting-build", 
    "koraidon-swimming-build", "koraidon-gliding-build", "salazzle-totem", "zygarde-10", "araquanid-totem", "togedemaru-totem", "lurantis-totem", "zarude-dada", 
    "pikachu-starter", "pikachu-world-cap", "morpeko-hangry", "miraidon-low-power-mode", "miraidon-drive-mode", "miraidon-aquatic-mode", "miraidon-glide-mode", 
    "araquanid-totem", "togedemaru-totem", "lurantis-totem", "zarude-dada"];
    let check = "";
    exilated.map((item) => {
        if (test === item) {
            check = "0";
        }
    });
    if (check === "0") {
        return "";
    }
    else {return `<li class="poke-card">
        <a href="/pokemons/index.html?pokemon=${path.name}">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png" alt="${path.name}" />
            <h3>${path.name[0].toUpperCase()+path.name.substring(1)}</h3>
        </a>
    </li>`};
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
        const title = document.querySelector("#type-h2"); 
        title.innerHTML = this.category[0].toUpperCase()+this.category.substring(1);
    }

}