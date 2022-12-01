

const articles = document.getElementsByTagName('article');
const paragraphs = document.getElementsByTagName('p');

const firstArticle = articles[0] ;

const secondParagraph = paragraphs[1];

const whiteTextElements = document.getElementsByClassName('text-white');
const sidebar = document.getElementById('sidebar');

// Modify the DOM
const mainHeading = document.getElementById('main-heading');
mainHeading.textContent = 'Modify the DOM';

const header = document.getElementById('page-header');
header.innerHTML = '<h2 >Modify the DOM 2 </h2>';
header.classList.add('text-center');

sidebar.classList.remove('bg-info');
sidebar.classList.add('bg-primary');

header.style.padding = '1em';
header.classList.remove('bg-dark');
header.style.backgroundColor = '#B54135';

let newArticle = document.createElement('article');
let newHeading = document.createElement('h3');
let newParagraph = document.createElement('p');

newHeading.textContent = 'article 004';
newParagraph.textContent =  'Ask to be pet then attack owners hand jumps off balcony gives owner dead mouse at present then poops in litter box snatches yarn and fights with dog cat chases laser ';

newArticle.appendChild(newHeading);
newArticle.appendChild(newParagraph);

newArticle.classList.add('n-2' , 'p-2' , 'border' , 'border-secondary');

newArticle.setAttribute('id' , 'art-004');

const main = document.querySelector('main');
main.appendChild(newArticle);