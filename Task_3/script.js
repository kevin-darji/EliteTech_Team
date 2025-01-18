const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const pendingTasksList = document.getElementById('pendingTasksList');
const completedTasksList = document.getElementById('completedTasksList');

let tasks = [];

addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    if (taskText === '') return;

    const newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = '';
});

function renderTasks() {
    pendingTasksList.innerHTML = '';
    completedTasksList.innerHTML = '';

    tasks.forEach(task => {
        const listItem = document.createElement('li');
        listItem.textContent = task.text;

        const completeBtn = document.createElement('button');
        completeBtn.classList.add('completeBtn');
        completeBtn.textContent = 'Complete';
        completeBtn.addEventListener('click', () => {
            task.completed = true;
            renderTasks();
        });

        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            // Implement edit functionality
            const newText = prompt('Edit task:', task.text);
            if (newText !== null) {
                task.text = newText;
                renderTasks();
            }
        });

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('deleteBtn');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            tasks = tasks.filter(t => t !== task);
            renderTasks();
        });

        listItem.appendChild(completeBtn);
        listItem.appendChild(editBtn);
        listItem.appendChild(deleteBtn);

        if (task.completed) {
            completedTasksList.appendChild(listItem);
        } else {
            pendingTasksList.appendChild(listItem);
        }
    });
}