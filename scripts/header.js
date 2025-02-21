import { createElement } from "./utils.js";


export function createHeaderHTML() {
  const body = document.querySelector('body');

  const headerContainer = createElement('header', 'header-container');
  const header = createElement('div', 'header');
  const logoTipo = createElement('div', 'logo-tipo');
  const namePage = createElement('a', 'logo', 'Quadrinópolis', {href: 'index.html'});
  const headerEntrar = createElement('div', 'header-entrar');
  const linkEntrar = createElement('a', '', 'Entrar', { href: 'registrar.html' });


  logoTipo.appendChild(namePage);
  headerEntrar.appendChild(linkEntrar);

  header.appendChild(logoTipo);
  header.appendChild(headerEntrar);
  headerContainer.appendChild(header);

  body.insertAdjacentElement('afterbegin', headerContainer)
}

