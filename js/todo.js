const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function deleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
}

function paintTodo(toDo) {
  // li와 span 생성
  const todoLi = document.createElement("li");
  const todoSpan = document.createElement("span");
  const todoBtn = document.createElement("button");

  todoSpan.innerText = toDo;
  todoBtn.innerText = "❌";

  todoBtn.addEventListener("click", deleteTodo);

  // li 안에 span 넣기
  todoLi.appendChild(todoSpan);
  todoLi.appendChild(todoBtn);

  // todoList안에 li넣기
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
