import { randomEmoji } from './emoticons.js';
import { addToArray, addToSet } from './functions.js';

const input = document.querySelector('#input');
input.value = randomEmoji();

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    const value = input.value;
    addToArray(value);
    addToSet(value);
    input.value = '';
    input.focus();
});