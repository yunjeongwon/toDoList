// const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";
let todos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function deleteTodo(event) {
  const li = event.target.parentNode;
  li.remove();
  todos = todos.filter((element) => element.id !== parseInt(li.id));
  saveToDos();
}

function paintTodos(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  li.addEventListener("mouseover", () => input.classList.remove("hidden"));
  li.addEventListener("mouseleave", () => input.classList.add("hidden"));
  const input = document.createElement("input");
  input.type = "checkbox";
  input.classList.add("hidden");
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.append(input, span, button);
  todoList.append(li);
}

function todoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    text: newTodo,
    id: Date.now(),
  };
  todos.push(todoObj);
  paintTodos(todoObj);
  saveToDos();
}

todoForm.addEventListener("submit", todoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  const parsedTodos = JSON.parse(savedTodos);
  todos = parsedTodos;
  todos.forEach(paintTodos);
}
