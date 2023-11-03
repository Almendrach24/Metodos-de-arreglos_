let tasks = [
    { id: 1, description: "Ejemplo tarea 1", completed: false },
    { id: 2, description: "Ejemplo tarea 2", completed: false },
    { id: 3, description: "Ejemplo tarea 3", completed: true }
];

const taskList = document.getElementById('taskList');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach(task => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('taskItem');
        const taskDesc = document.createElement('p');
        taskDesc.textContent = task.description;
        if (task.completed) {
            taskDesc.classList.add('completed');
        }
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteTask(task.id);
        const changeButton = document.createElement('button');
        changeButton.textContent = 'Cambiar';
        changeButton.onclick = () => changeTaskStatus(task.id);

        taskItem.appendChild(taskDesc);
        taskItem.appendChild(deleteButton);
        taskItem.appendChild(changeButton);
        taskList.appendChild(taskItem);
    });

    totalTasks.textContent = tasks.length;
    completedTasks.textContent = tasks.filter(task => task.completed).length;
}

function addTask() {
    const newTaskInput = document.getElementById('newTask');
    const newTaskDescription = newTaskInput.value;
    if (newTaskDescription) {
        const newTask = {
            id: tasks.length + 1,
            description: newTaskDescription,
            completed: false
        };
        tasks.push(newTask);
        newTaskInput.value = '';
        renderTasks();
    }
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function changeTaskStatus(id) {
    tasks.forEach(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
    });
    renderTasks();
}

renderTasks();
