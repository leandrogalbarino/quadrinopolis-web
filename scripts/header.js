import { createElement } from "./utils.js";


export function createHeaderHTML() {
  const body = document.querySelector('body');

  const headerContainer = createElement('header', 'header-container');
  const header = createElement('div', 'header');
  const logo = createElement('div', 'header__logo');
  const namePage = createElement('a', 'logo', 'Quadrinópolis', { href: 'index.html' });
  const headerEntrar = createElement('div', 'header__entrar');
  const linkEntrar = createElement('a', '', 'Entrar', { href: 'registrar.html' });


  logo.appendChild(namePage);
  headerEntrar.appendChild(linkEntrar);

  header.appendChild(logo);
  header.appendChild(headerEntrar);
  headerContainer.appendChild(header);

  body.insertAdjacentElement('afterbegin', headerContainer)
}

export function createFooterHTML() {
  const body = document.querySelector('body');

  const footer = createElement('footer', 'footer');
  const logo = createElement('div', 'footer__logo', 'Quadrinópolis');

  footer.appendChild(logo);

  body.insertAdjacentElement('beforeend', footer)
}
