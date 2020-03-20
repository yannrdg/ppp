/* eslint-disable no-multi-assign */
/* eslint-disable no-mixed-operators */
/* eslint-disable max-len */
/* eslint-disable no-undef */
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
/* eslint-disable no-console */

const bouton = document.querySelector('main>button');
let resultat = document.querySelector('main>p:last-of-type');
const pub = document.getElementById('publicité');
const marketing = document.getElementById('marketing');
const com = document.getElementById('communication');
const curieux = document.getElementById('curieux');
const ecoute = document.getElementById('écoute');
const org = document.getElementById('organisé');
const analyser = document.getElementById('analyser');
const creer = document.getElementById('créer');
const communiquer = document.getElementById('communiquer');
const team = document.getElementById('équipe');
const solo = document.getElementById('indépendant');
const importe = document.getElementById('importe')

const q1 = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
const q2 = [0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0];
const q3 = [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 0];
const q4 = [0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0];
const q5 = [1, 0, 1, 0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
const q6 = [1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0];
let metiers = [0, 0, 0, 0, 0, 0, 0, 0];
let input = document.querySelectorAll('input');
let r1 = 0;
let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;
let r6 = 0;
let reponses = [0, 0, 0, 0, 0, 0];
const div = document.querySelectorAll('main>section>div:nth-of-type(2)>div');
console.log(div);
let ch = 2;


console.log('antho');

bouton.addEventListener('click', () => {
    for (let i = 0; i <= 5; i += 1) {
        if (input[i * 3].checked) {
            reponses[i] = 0;
        } else if (input[i * 3 + 1].checked) {
            reponses[i] = 1;
        } else if (input[i * 3 + 2].checked) {
            reponses[i] = 2;
        } else if (input[i * 3 + 3].checked) {
            reponses[i] = 3;
        } else if (input[i * 3 + 4].checked) {
            reponses[i] = 4;
        }
    }
    console.log(reponses);
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q1[reponses[0] * 8 + j];
    }
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q2[reponses[1] * 8 + j];
    }
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q3[reponses[2] * 8 + j];
    }
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q4[reponses[3] * 8 + j];
    }
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q4[reponses[4] * 8 + j];
    }
    for (let j = 0; j <= 7; j += 1) {
        metiers[j] += q4[reponses[5] * 8 + j];
    }
    let max = Math.max(...metiers);
    console.log(max);
    parseInt(max, 10);
    metiers[0] /= max;
    metiers[0] *= 100;
    div[0].style.width = metiers[0] += '%';
    metiers[1] /= max;
    metiers[1] *= 100;
    div[1].style.width = metiers[1] += '%';
    metiers[2] /= max;
    metiers[2] *= 100;
    div[2].style.width = metiers[2] += '%';
    metiers[3] /= max;
    metiers[3] *= 100;
    div[3].style.width = metiers[3] += '%';
    metiers[4] /= max;
    metiers[4] *= 100;
    div[4].style.width = metiers[4] += '%';
    metiers[5] /= max;
    metiers[5] *= 100;
    div[5].style.width = metiers[5] += '%';
    metiers[6] /= max;
    metiers[6] *= 100;
    div[6].style.width = metiers[6] += '%';
    metiers[7] /= max;
    metiers[7] *= 100;
    div[7].style.width = metiers[7] += '%';

    window.scrollTo(0, document.body.scrollHeight);
});