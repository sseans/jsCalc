// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener('click', addTodo)

// Functions
function addTodo(event) {
    // Prevents for from submitting (refreshes page every time submit is clicked)
    event.preventDefault();
}
