let listElement = document.querySelector('#app ul') as HTMLUListElement;
let buttonElement = document.querySelector('#app button') as HTMLElement;
let inputElement = document.querySelector('#app input') as HTMLInputElement;

const savedTaskList:(string | null) = localStorage.getItem("@task_list");
let _tarefas:string[] = savedTaskList !== null && JSON.parse(savedTaskList) || [];


const listTasks = (): void =>{
    listElement.innerHTML=``;

    _tarefas.map((item, index) =>{
        let todoElement = document.createElement('li');
        let taskText = document.createTextNode(item);

        let linkElement = document.createElement('a');
        linkElement.setAttribute("href", "#");

        linkElement.setAttribute('onclick', `taskDelete(${index})`);
        linkElement.setAttribute('style', 'margin-left: 10px');

        const linkText = document.createTextNode('Excluir');
        linkElement.appendChild(linkText);
        
        todoElement.appendChild(taskText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);

    
    })
}
listTasks();

function addTask(): false | undefined {
    if(inputElement.value === ''){
        alert('Digite alguma tarefa!');
        return false;
    } else {
        const tarefaDigitada:string = inputElement.value;
        _tarefas.push(tarefaDigitada);
        inputElement.value = '';
        addToDateLocalStorage();
        listTasks();
    
    }
}

function taskDelete(index:number): void {
    _tarefas.splice(index, 1);
    listTasks();
    addToDateLocalStorage();
}

function addToDateLocalStorage(): void {
    localStorage.setItem('@task_list', JSON.stringify(_tarefas));
}


inputElement.addEventListener("keypress", (e) =>{
    if(e.key === "Enter"){
        addTask();
    }
});
buttonElement.addEventListener('click', addTask);


