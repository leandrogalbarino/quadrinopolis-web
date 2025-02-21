import { createElement } from "./utils.js";
import { createHeaderHTML, createFooterHTML } from "./header.js";
import { obras } from "../data/obras.js";


function createGrid() {
  // const catalogo = createElement('div', 'main-catalogo-container');
  const catalogo = document.querySelector('.catalogo');

  obras.forEach((obra) => {
    const obraElement = createElement('a', 'catalogo__link-obra', '', { href: `${obra.name}.html`});
    const capa = createElement('img', 'catalogo__img', '', {src: obra.capa, alt:`${obra.name}`})
    
    obraElement.appendChild(capa);
    catalogo.appendChild(obraElement);
  });
}

function events() {
  const pesquisar = document.querySelector('')
}


function createPage() {
  createHeaderHTML();
  createGrid();
  createFooterHTML();
  events();
}

createPage();