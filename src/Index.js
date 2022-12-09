import './style.css';
import sync from './assets/images/sync.png';
import enter from './assets/images/subdirectory_arrow_left.png';
import printtasks from './print.js';

const title = document.getElementById('title');
const addInput = document.getElementById('add');

title.src = sync;
addInput.src = enter;
printtasks();