// I think will get the poke data and repass

const baseURL = "https://pokeapi.co/api/v2/";
async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw {name: "servicesError", message: data};
  }
}

export default class ExternalServices {
  constructor(category) {
    //this.category = category;
    //this.path = `../json/${this.category}.json`;
  }
  async getData(category) {
    const response = await fetch(baseURL + `pokemon/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async getType(category) {
    const response = await fetch(baseURL + `type/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }

  async findPokeById(id) {
    const res = await fetch(baseURL + `pokemon/${id}`);
    const data = await convertToJson(res);
    return data.Result;
  }

}
