import { createElement } from "./utils.js";
import { createHeaderHTML } from "./header.js";
import { obras } from "../data/obras.js";


function createGrid() {
  // const catalogo = createElement('div', 'main-catalogo-container');
  const catalogo = document.querySelector('.main-catalogo-container');

  obras.forEach((obra) => {
    const obraElement = createElement('a', 'link-obra', '', { href: `${obra.name}.html`});
    const capa = createElement('img', 'main-catalogo-imagem', '', {src: obra.capa, alt:`${obra.name}`})
    
    obraElement.appendChild(capa);
    catalogo.appendChild(obraElement);
  });
}


function createPage() {
  createHeaderHTML();
  createGrid();
}

createPage();