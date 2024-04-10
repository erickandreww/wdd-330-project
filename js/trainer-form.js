import { loadHeaderFooter } from "./utils.mjs";
import TrainerCheck from "./TrainerCheck.mjs";

loadHeaderFooter();

const tcheck = new TrainerCheck("pokedex", ".trainer");
tcheck.init();

document.querySelector("#formSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    tcheck.check();
})

