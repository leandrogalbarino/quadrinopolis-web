import { createFooterHTML, createHeaderHTML } from "./layout.js";
import { works } from "../../../data/works.js";
import { createElement, toCapitalizeWords } from "./utils.js";

function loadAuthor(work) {
  const authorContainer = document.querySelector('.js-author');
  const authorName = createElement('span', '', work.author);
  authorContainer.appendChild(authorName);
}

function workImageUrl(workName) {
  return `../assets/images/works/work-${workName}`;
}

function loadPresentation(work) {
  const container = document.querySelector('.js-presentation');

  let workName = toCapitalizeWords(work.name.replace('-', ' '));

  const title = createElement('h1', '', workName);
  const synopsis = createElement('p', '', `"${work.synopsis}"`);

  container.appendChild(title);
  container.appendChild(synopsis);
}

function loadChapter(work, chapter) {
  const container = document.querySelector('.js-chapters');

  const containerChapter = createElement('div', 'chapters__chapter')
  const linkChapter = createElement('a', '', `Capítulo ${chapter}`, { href: `${work.name}-${chapter}.html` });

  containerChapter.appendChild(linkChapter);

  container.appendChild(containerChapter);
}

function loadComments(work) {
  const container = document.querySelector('.js-comments');
  const workComments = work.comments;


  workComments.forEach((commentElement) => {
    const commentDiv = createElement('div', 'comments__value');
    const authorComment = createElement('span', '', commentElement.author);
    const comment = createElement('p', '', commentElement.comment);

    commentDiv.appendChild(authorComment);
    commentDiv.appendChild(comment);
    console.log(commentDiv);

    container.appendChild(commentDiv);
  });

}

function loadNamePage(work) {
  document.title = toCapitalizeWords(work.name.replace('-', ' '));
}

function pageName() {
  const path = window.location.pathname;
  const nome = path.substring(path.lastIndexOf("/") + 1).replace(".html", "");
  return nome;
}

function createWorkHTML() {
  const page = pageName();
  const work = works.find((workElement) => 
    workElement.name.toLocaleLowerCase() === page.toLocaleLowerCase()
  );
  
  loadNamePage(work);
  loadAuthor(work);
  loadPresentation(work);
  for (let i = 1; i <= work.chapters; i++) {
    loadChapter(work, i);
  }
  loadComments(work);
}

function createPage() {
  createHeaderHTML();
  createWorkHTML();
}

createPage();