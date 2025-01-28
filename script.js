const inputTask = document.getElementById('inputTask');
const addTask = document.getElementById('addTask');
const taskList = document.getElementById('taskList');


function add() {
    const taskText = inputTask.value.trim();
    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const task = document.createElement('div');
    task.className = 'task';

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        taskList.removeChild(task);
    };

    task.appendChild(taskItem);
    task.appendChild(deleteButton);

    taskList.appendChild(task);

    inputTask.value = "";
}

