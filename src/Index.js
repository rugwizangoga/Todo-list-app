import './style.css';
import sync from './assets/images/sync.png';
import enter from './assets/images/subdirectory_arrow_left.png';
import {
  printtasks, addtask, deleteTask, edittask, deletecompleted,
} from './CRUD.js';
import isComplete from './status update.js';

const title = document.getElementById('title');
const addInput = document.getElementById('add');

title.src = sync;
addInput.src = enter;

printtasks();

const newtask = document.querySelector('.complete');

newtask.addEventListener('change', newtask.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    if (newtask.value !== '') {
      addtask(newtask.value);
      newtask.value = '';
    }
  }
}));

document.addEventListener('click', (e) => {
  const { id } = e.target;
  if (e.target.matches('.trash')) {
    deleteTask(id);
  }
  if (e.target.matches('.more')) {
    edittask(id);
  }

  if (e.target.matches('.check')) {
    isComplete(id);
  }
  if (e.target.matches('.all')) {
    deletecompleted();
  }
});