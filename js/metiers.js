/* eslint-disable no-console */
/* eslint-disable no-loop-func */
/* eslint-disable spaced-comment */
/* eslint-disable no-unreachable */
/* eslint-disable default-case */
/* eslint-disable no-extra-semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prefer-const */
/* eslint-disable semi */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable indent */

console.log('antho');

const bouton = document.querySelector('body>div:nth-of-type(2)>button:first-of-type');
let menu = document.querySelector('body>section:first-of-type')
let forme = 1;

bouton.addEventListener('click', () => {
    switch (forme) {
        case 1:
            menu.style.display = 'grid';
            forme += 1;
            break;
        case 2:
            menu.style.display = 'none';
            forme = 1;
            break;
    }
});

const menu1 = document.querySelector('main>div:first-of-type>button:nth-of-type(1)');
const menu2 = document.querySelector('main>div:first-of-type>button:nth-of-type(2)');
const menu3 = document.querySelector('main>div:first-of-type>button:nth-of-type(3)');

let article1 = document.querySelector('main>article:first-of-type');
let article2 = document.querySelector('main>article:nth-of-type(2)');
let article3 = document.querySelector('main>article:nth-of-type(3)');

menu1.addEventListener('click', () => {
    article1.style.display = 'block';
    article2.style.display = 'none';
    article3.style.display = 'none';
    window.scrollTo(0, document.body.scrollHeight);
});

menu2.addEventListener('click', () => {
    article1.style.display = 'none';
    article2.style.display = 'block';
    article3.style.display = 'none';
    window.scrollTo(0, document.body.scrollHeight);
});

menu3.addEventListener('click', () => {
    article1.style.display = 'none';
    article2.style.display = 'none';
    article3.style.display = 'block';
    window.scrollTo(0, document.body.scrollHeight);
});


const bouton2 = document.querySelector('div:first-of-type>div>button');

bouton2.addEventListener('click', () => {
    document.location = '../html/apropos.html';
});