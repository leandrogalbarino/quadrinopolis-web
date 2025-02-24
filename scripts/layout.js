import { createElement } from "./utils.js";


export function createHeaderHTML() {
  const body = document.querySelector('body');

  const headerContainer = createElement('header', 'header-container');
  const header = createElement('div', 'header');
  const logo = createElement('div', 'header__logo');
  const namePage = createElement('a', 'logo', 'Quadrinópolis', { href: 'index.html' });
  const headerLogin = createElement('div', 'header__login');
  const linkLogin = createElement('a', '', 'Entrar', { href: 'entrar.html' });


  logo.appendChild(namePage);
  headerLogin.appendChild(linkLogin);

  header.appendChild(logo);
  header.appendChild(headerLogin);
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


export function createFooterLogin() {
  const body = document.querySelector('.login__body');

  const footer = createElement('footer', 'login__footer');
  const link = createElement('a', 'login__footer-redirect', 'Catálogo', { href: 'index.html' });

  footer.appendChild(link);
  body.insertAdjacentElement('beforeend', footer);
}
