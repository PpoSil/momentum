const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintTodo(toDo) {
  // li와 span 생성
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");

  // li 안에 span 넣기
  todoLi.appendChild(todoSpan);
  todoSpan.innerText = toDo;

  todoList.appendChild(todoLi);
}

function onTodoSubmit(e) {
  e.preventDefault();
  console.dir(todoInput.value);
  const newTodo = todoInput.value;
  todoInput.value = "";
  paintTodo(newTodo);
}

todoForm.addEventListener("submit", onTodoSubmit);
