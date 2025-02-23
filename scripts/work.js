import { createFooterHTML, createHeaderHTML } from "./layout.js";
import { works } from "../data/works.js";
import { createElement } from "./utils.js";

function loadAuthor(work) {
  const authorContainer = document.querySelector('.js-author');
  const authorName = createElement('span', '', `${work.author}`);
  authorContainer.appendChild(authorName);
}

function loadPresentation(work) {
  const container = document.querySelector('.js-presentation');

  const title = createElement('h1', '', `${work.name}`);
  const synopsis = createElement('p', '', `${work.synopsis}`);

  container.appendChild(title);
  container.appendChild(synopsis);
}

function loadChapter(work, chapter) {
  const container = document.querySelector('.js-chapters');

  const containerChapter = createElement('div', 'chapter__container')
  const linkChapter = createElement('a', 'chapter', `Capítulo ${chapter}`, { href: `${work.name}-${chapter}.html` });

  containerChapter.appendChild(linkChapter);

  container.appendChild(containerChapter);
}

function loadComments(work) {
  const container = document.querySelector('.js-comments');
  const workComments = work.comments;

  workComments.forEach((comment) => {
    const commentDiv = createElement('div', 'comments__value');
    const authorComment = createElement('span', '', comment.author);
    const comment = createElement('p', comment.comment);

    commentDiv.appendChild(authorComment);
    commentDiv.appendChild(comment);

    container.appendChild(commentDiv);
  });

}

function createWorkHTML() {
  works.forEach((work) => {
    loadAuthor(work);
    loadPresentation(work);
    for (let i = 1; i <= work.chapters; i++) {
      loadChapter(work, i);
    }
    loadComments(work);
  });
}

function createPage() {
  createHeaderHTML();
  createWorkHTML();
  createFooterHTML();
}

createPage();