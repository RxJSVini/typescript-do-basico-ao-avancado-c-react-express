"use strict";
let listElement = document.querySelector('#app ul');
let buttonElement = document.querySelector('#app button');
let inputElement = document.querySelector('#app input');
const savedTaskList = localStorage.getItem("@task_list");
let _tarefas = savedTaskList !== null && JSON.parse(savedTaskList) || [];
const listTasks = () => {
    listElement.innerHTML = ``;
    _tarefas.map((item, index) => {
        let todoElement = document.createElement('li');
        let taskText = document.createTextNode(item);
        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");
        let position = item.indexOf(item);
        linkElement.setAttribute('onclick', `taskDelete(${index})`);
        linkElement.setAttribute('style', 'margin-left: 10px');
        const linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        todoElement.appendChild(taskText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    });
};
listTasks();
const addTask = () => {
    if (inputElement.value === '') {
        alert('Digite alguma tarefa!');
        return false;
    }
    else {
        const tarefaDigitada = inputElement.value;
        _tarefas.push(tarefaDigitada);
        inputElement.value = '';
        addToDateLocalStorage();
        listTasks();
    }
};
const taskDelete = (index) => {
    _tarefas.splice(index, 1);
    listTasks();
    addToDateLocalStorage();
};
const addToDateLocalStorage = () => {
    localStorage.setItem('@task_list', JSON.stringify(_tarefas));
};
inputElement.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});
buttonElement.addEventListener('click', addTask);
