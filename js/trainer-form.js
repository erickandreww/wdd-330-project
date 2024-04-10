import { loadHeaderFooter } from "./utils.mjs";
import TrainerCheck from "./trainerCheck.mjs";

const tcheck = new TrainerCheck("pokedex", ".trainer");
tcheck.init();

loadHeaderFooter();

document.querySelector("#formSubmit").addEventListener("click", (e) => {
    e.preventDefault();
    tcheck.check();
    console.log("pokemon");
})

