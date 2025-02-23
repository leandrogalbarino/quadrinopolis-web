import { createElement } from "./utils.js";
import { createHeaderHTML, createFooterHTML } from "./layout.js";
import { works } from "../data/works.js";


function createWorkElement(work) {
  const catalog = document.querySelector('.js-catalog');

  const workElement = createElement('a', 'catalog__link-work', '', { href: `${work.name}.html` });
  const cover = createElement('img', 'catalog__img', '', { src: work.cover, alt: `${work.name}` })

  workElement.appendChild(cover);
  catalog.appendChild(workElement);

}

function createGrid() {
  works.forEach((work) => {
    createWorkElement(work);
  });
}

function eventPesquisa() {
  const input = document.querySelector('#js-search__input-bar');
  const catalog = document.querySelector('.js-catalog');

  if (input.value.trim() === '') {
    return;
  }
  catalog.replaceChildren();

  works.forEach((work) => {
    const name = work.name.toLowerCase().replace('-', ' ');
    const inputValue = input.value.toLowerCase();

    if (name.startsWith(inputValue)) {
      createWorkElement(work);
    }
  });

  input.value = '';
}

function onClickPesquisa() {
  const search = document.querySelector('.js-search__button');
  search.addEventListener('click', () => {
    eventPesquisa();
  });
}

function onKeyDownPesquisa() {
  const input = document.querySelector('#js-search__input-bar');
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