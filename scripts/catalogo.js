import { createElement } from "./utils.js";
import { createHeaderHTML, createFooterHTML } from "./header.js";
import { obras } from "../data/obras.js";


function createObraElement(obra) {
  // const catalogo = createElement('div', 'main-catalogo-container');
  const catalogo = document.querySelector('.js-catalogo');

  const obraElement = createElement('a', 'catalogo__link-obra', '', { href: `${obra.name}.html` });
  const capa = createElement('img', 'catalogo__img', '', { src: obra.capa, alt: `${obra.name}` })

  obraElement.appendChild(capa);
  catalogo.appendChild(obraElement);

}

function createGrid() {
  obras.forEach((obra) => {
    createObraElement(obra);
  });
}

function eventPesquisa() {
  const input = document.querySelector('#js-pesquisa__barra-pesquisar');
  const catalogo = document.querySelector('.js-catalogo');

  if (input.value.trim() === '') {
    return;
  }
  catalogo.replaceChildren();

  obras.forEach((obra) => {
    const name = obra.name.toLowerCase().replace('-', ' ');
    const inputValue = input.value.toLowerCase();

    if (name.startsWith(inputValue)) {
      createObraElement(obra);
    }
  });

  input.value = '';
}

function onClickPesquisa() {
  const pesquisar = document.querySelector('.js-pesquisa__lupa-pesquisar');
  pesquisar.addEventListener('click', () => {
    eventPesquisa();
  });
}

function onKeyDownPesquisa() {
  const input = document.querySelector('#js-pesquisa__barra-pesquisar');
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      eventPesquisa();
    }
  });
}

function events() {
  onClickPesquisa();
  onKeyDownPesquisa();

}


function createPage() {
  createHeaderHTML();
  createGrid();
  createFooterHTML();
  events();
}

createPage();