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
let menu = document.querySelector('body>section:first-of-type');
let forme = 1;

bouton.addEventListener('click', () => {
    switch (forme) {
        case 1:
            menu.style.display = 'grid';
            console.log('antho');
            forme += 1;
            break;
        case 2:
            menu.style.display = 'none';
            forme = 1;
            break;
    }
});

const bouton2 = document.querySelector('div:first-of-type>div>button');

bouton2.addEventListener('click', () => {
    document.location = '../html/apropos.html';
});