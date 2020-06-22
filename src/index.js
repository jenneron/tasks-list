const container = document.querySelector('#container');
const input = document.createElement('input');
const button = document.createElement('button');
button.textContent = 'Добавить';
const ul = document.createElement('ul');
[input, button, ul].forEach(elem => container.appendChild(elem));

function createNote(text) {
  const noteLi = document.createElement('li');
  noteLi.textContent = text;
  ul.appendChild(noteLi);
  const noteLies = document.querySelectorAll('li');
  const noteLiesSorted = [...noteLies].map(elem => elem.textContent).sort();
  noteLiesSorted.forEach((el, i) => {
    noteLies[i].textContent = el;
  });
}

function clickButton() {
  if (input.value === '') return;
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const currentNote = input.value;
  if (tasks === null || tasks.length === 0) tasks = [];
  tasks.push(currentNote);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  createNote(currentNote);
  input.value = '';
}

button.addEventListener('click', clickButton);

JSON.parse(localStorage.getItem('tasks')).forEach(elem => createNote(elem));
