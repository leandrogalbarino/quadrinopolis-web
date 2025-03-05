import { createElement } from "./utils.js";
import { createHeaderHTML, createFooterHTML } from "./layout.js";
import { works } from "../../../data/works.js";


function createWorkElement(work) {
  const catalog = document.querySelector('.js-catalog');

  const workElement = createElement('a', 'catalog__link-work', '', { href: `${work.name}.html` });
  const cover = createElement('img', 'catalog__img', '', { src: `../assets/images/works/work-${work.cover}`, alt: `${work.name}` })

  workElement.appendChild(cover);
  catalog.appendChild(workElement);

}

function createGrid() {
  const url = new URL(window.location.href);
  let searchName = url.searchParams.get('search');
  if (searchName) {
    const catalog = document.querySelector('.js-catalog');
    console.log(catalog);
    works.forEach((work) => {
      const name = work.name.toLowerCase().replace('-', ' ');
      if (name.startsWith(searchName)) {
        createWorkElement(work);
      }
    });

    if (!catalog.firstChild) {
      const container = createElement('div', 'search__nothing');
      const p = createElement('p', 'search__nothing-p', `Nenhuma obra encontrada com: "${searchName}".`)
      const link = createElement('a', 'search__nothing-link', `Catálogo`, { href: '/html' })
      
      container.append(p);
      container.append(link);

      catalog.appendChild(container);

    }

  } else {
    works.forEach((work) => {
      createWorkElement(work);
    });
  }

}

function eventPesquisa() {
  const input = document.querySelector('#js-search__input-bar');
  const catalog = document.querySelector('.js-catalog');

  const name = input.value.trim();
  if (name === '') {
    return;
  }
  window.location.href = `?search=${name}`;

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