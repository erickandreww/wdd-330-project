import { loadHeaderFooter, getLocalStorage } from "./utils.mjs";
import PokeTeam from "./PokeTeam.mjs";

const team = new PokeTeam("poke-team", ".team-list");
team.init();
loadHeaderFooter();