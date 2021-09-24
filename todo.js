const todoInput = document.querySelector('.todoInput');
const todoButton = document.querySelector('.todoButton');
const todoList = document.querySelector('.todolist');
const filterOption = document.querySelector('.filterTodo');

//eventListener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkDeleteItem);
filterOption.addEventListener('click', filterTodo);

//function
function addTodo(event) {
    event.preventDefault();
    //Todo Div
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('toDo');

    //Todo Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todoItem');
    toDoDiv.appendChild(newTodo);
    //save value in localStorage
    saveLocalTodos(todoInput.value);

    // check button
    const checkButton = document.createElement('button');
    checkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkButton.classList.add('completeBtn');
    toDoDiv.appendChild(checkButton);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('deleteBtn');
    toDoDiv.appendChild(deleteButton);

    //append to list
    todoList.appendChild(toDoDiv);

    //clear input
    todoInput.value = "";
}

function checkDeleteItem(e){
    const item = e.target;
    //delete
    if (item.classList[0] === 'deleteBtn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.classList.add('hidden');
    }

    //check
    if(item.classList[0] === 'completeBtn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodo(e) {
    let todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex'
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(toDo){
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push('toDo');
    localStorage.setItem('todos', JSON.stringify(todos));
}