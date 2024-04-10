import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
import Pokedex from "./Pokedex.mjs";

const pokedex = new Pokedex("pokedex", ".pokedex-list");
pokedex.init();
loadHeaderFooter();