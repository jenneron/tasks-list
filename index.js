let container = document.querySelector('#container');
let input = document.createElement('input');
let button = document.createElement('button');
button.textContent = 'Добавить';
let ul = document.createElement('ul');
[input, button, ul].forEach(elem => container.appendChild(elem));

button.addEventListener("click", clickButton);

JSON.parse(localStorage.getItem("tasks")).forEach(elem => createNote(elem));

function clickButton() {
    if (input.value === '') return;
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    let currentNote = input.value;
    if (tasks === null || tasks.length === 0) tasks = [];
    tasks.push(currentNote);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    createNote(currentNote);
    input.value = '';
}

function createNote(text) {
    let noteLi = document.createElement('li');
    noteLi.textContent = text;
    ul.appendChild(noteLi);
    let noteLies = document.querySelectorAll('li');
    let noteLiesSorted = [...noteLies].map(elem => elem.textContent).sort();
    noteLiesSorted.forEach((el, i) => noteLies[i].textContent = el);
}