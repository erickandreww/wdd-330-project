export function getLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key) {
    localStorage.setItem(key, JSON.stringify(data));
}

export function renderWithTemplate(templateFn, parentElement, data, callbackD, position = "afterbegin"){
    parentElement.insertAdjacentHTML(position, templateFn);
    if (callbackD){
        callbackD(data);
      }
}

async function loadTemplate(path) {
    const res = await fetch(path);
    const html = await res.text();
    let template = document.createElement("template");
    template.innerHTML = html;
    return template.innerHTML;
}
  
export async function loadHeaderFooter() {
    const headerTemplate = await loadTemplate("/public/partials/header.html");
    const headerElement = document.getElementById("main-header");
    const footerTemplate = await loadTemplate("/public/partials/footer.html");
    const footerElement = document.getElementById("main-footer");
    renderWithTemplate(headerTemplate,headerElement);
    renderWithTemplate(footerTemplate, footerElement);
}

export function getParams(param){
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const pokemon = urlParams.get(param);
    return pokemon;
}