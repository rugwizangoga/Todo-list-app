import more from './assets/images/more_vert.png';

let Taskslist = [
  {
    description: 'learn',
    completed: false,
    index: 4,
  },
  {
    description: 'fight',
    completed: false,
    index: 2,
  },
  {
    description: 'game',
    completed: true,
    index: 3,
  },
  {
    description: 'push',
    completed: true,
    index: 1,
  },
];
let PostionToInsert = 2;

const List = document.querySelector('.list');

const printtasks = () => {
  Taskslist = Taskslist.sort((a, b) => a.index - b.index);
  Taskslist.forEach((task) => {
    const listItem = document.createElement('li');
    const checkBoxId = task.description + task.index.toString();
    if (task.completed === true) {
      listItem.innerHTML = `
    <div class='textinput'><input id= ${checkBoxId} class='check' type="checkbox" checked=true>&nbsp;&nbsp;<input type="text" value=${task.description} class="complete active" readonly>
    </div>
    <img id=${task.description} class="more" src=${more} alt="more_vert">
  
                      `;
    } else {
      listItem.innerHTML = `
  <div class='textinput' ><input id= ${checkBoxId} class='check' type="checkbox">&nbsp;&nbsp;<input type="text" value=${task.description} class="complete" readonly>
  </div>
  <img id=${task.description} class="more" src=${more} alt="more_vert">
                    `;
    }
    listItem.classList.add('listitem');
    List.insertBefore(listItem, List.children[PostionToInsert]);
    PostionToInsert += 1;
  });
};

export default printtasks;
