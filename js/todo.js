const todoForm = document.getElementById("todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

// todo가 저장될 배열 생성
let toDos = [];

function saveTodos() {
  // localStorage에는 arr 형태로 저장 불가능 -> JSON.stringify()로 str로 변환 후 저장
  // JSON.stringify(@@@): 자바스크립트 객체나 array or any js code를 str으로 변환
  localStorage.setItem("todos", JSON.stringify(toDos));
}

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
  toDos.push(newTodo);
  paintTodo(newTodo);
  saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

function sayHello(item) {
  console.log("this is the turn of ", item);
}

// localStorage(str로 저장됨)에 있는 todos는 현재 "["a","b","c"]" 형태로 저장되어 있음
const savedTodos = localStorage.getItem("todos");
console.log(savedTodos);

if (savedTodos) {
  // JSON.parse(@@@): str을 자바스크립트 객체로 변환 -> arr로 변환
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);
}
