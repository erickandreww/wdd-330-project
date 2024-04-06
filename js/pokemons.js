import { setLocalStorage, getParams } from "./utils.mjs";
import ExternalServices from "./externalServices.mjs";
import PokeInfo from "./pokeInfo.mjs";
import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";

loadHeaderFooter();

const dataSource = new ExternalServices();
const pokeId = getParams("pokemon");

const pokemonInfo = new PokeInfo(pokeId, dataSource);
pokemonInfo.init();