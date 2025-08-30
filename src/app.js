let todos = [];
let editIndex = null;

function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo, idx) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
            <span>${todo}</span>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="editTodo(${idx})">Edit</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTodo(${idx})">Delete</button>
            </div>
        `;
        todoList.appendChild(li);
    });
}

document.getElementById('add-todo').onclick = function() {
    const input = document.getElementById('todo-input');
    const value = input.value.trim();
    if (value) {
        if (editIndex !== null) {
            todos[editIndex] = value;
            editIndex = null;
            document.getElementById('add-todo').textContent = 'Add TODO';
        } else {
            todos.push(value);
        }
        input.value = '';
        renderTodos();
    }
};

window.editTodo = function(idx) {
    document.getElementById('todo-input').value = todos[idx];
    editIndex = idx;
    document.getElementById('add-todo').textContent = 'Update TODO';
};

window.deleteTodo = function(idx) {
    todos.splice(idx, 1);
    renderTodos();
    document.getElementById('add-todo').textContent = 'Add TODO';
    document.getElementById('todo-input').value = '';
    editIndex = null;
};

// Initial render
renderTodos();