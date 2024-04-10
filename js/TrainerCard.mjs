import { getLocalStorage } from "./utils.mjs";

function trainerCardTemplate(info) {
    return `<section class="trainer-card">
        <img src="/public/images/trainer-img.jpg" alt="trainer-img">
        <div class="main-info">
            <h3>Trainer: ${info.fname} ${info.lname}</h3>
            <h4>Age: ${info.age}</p>
            <h4>Region: ${info.region[0].toUpperCase()+info.region.substring(1)}</h4>
        </div>
        <div class="bot-info">
            <h4>Pokemons Caught: ${info.pokemons_total}</h4>
            <h4>Level: ${info.trainer_level}</h4>
        </div>
    </section>`
}

export default class TrainerCard {
    
    init() {
        this.trainerInfo = getLocalStorage("trainer");
        this.renderCardTemplate("div"); 
    }

    renderCardTemplate(selector) {
        const element = document.querySelector(selector);
        element.insertAdjacentHTML("afterBegin", trainerCardTemplate(this.trainerInfo));
    }
}