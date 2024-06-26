import { getLocalStorage, setLocalStorage } from "./utils.mjs";
import ExternalServices from "./externalServices.mjs";

function formDataToJson(element){
    const formData = new FormData(element), convertedJson = {};
    formData.forEach(function (value, key){
        convertedJson[key] = value;
    });
    return convertedJson;
}


export default class TrainerCheck {
    constructor(key, output) {
        this.key = key;
        this.output = output;
        this.list = [];
        this.poketotal = 0;
        this.trainerLevel = "";
    }

    init() {
        this.list = getLocalStorage(this.key)
        this.manyCaught();
        this.displayStatus();
    }
    
    manyCaught() {
        this.list.map((item) => {
            this.poketotal ++;
        })
        console.log(this.poketotal);
        this.trainerLevelCheck();
    }

    trainerLevelCheck() {
        if (this.poketotal < 5) {
            this.trainerLevel = "Beginner";
        }
        else if (this.poketotal <= 10) {
            this.trainerLevel = "Intermediate";
        }
        else if (this.poketotal <= 18) {
            this.trainerLevel = "Experxt";
        }
        else if (this.poketotal <= 21) {
            this.trainerLevel = "Leader";
        }
    }

    displayStatus() {
        document.querySelector("#captured").innerText = this.poketotal;
        document.querySelector("#trainer-level").innerText = this.trainerLevel;
    }

    async check() {
        const formElement = document.forms["trainer"];
        console.log(formElement);
        const json = formDataToJson(formElement);
        json["pokemons_total"] = this.poketotal;
        json["trainer_level"] = this.trainerLevel;
        console.log(json);
        setLocalStorage("trainer", json);
        if (json.age === '' || json.fname === '' || json.lname === '') { 
            console.log(alert("Missing Information"))
        } else { 
            location.assign("/trainer-info/trainer.html");
        }
    }   

}