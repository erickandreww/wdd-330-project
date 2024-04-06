import ExternalServices from "./externalServices.mjs";
import PokeListing from "./pokeListing.mjs";
import { loadHeaderFooter , getParams } from "./utils.mjs";

loadHeaderFooter();

const param = getParams("type");
const dataSource = new ExternalServices();
const htmlList = document.querySelector(".poke-list");
const pokeList = new PokeListing(param, dataSource, htmlList);

pokeList.init();