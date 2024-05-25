const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 대문자로 쓰는 이유? string이라는 것을 알려주기 위해 and 중요한 정보를 담지 않음

function onLoginSubmit(e) {
  // dir:객체의 속성이나 DOM 요소의 구조 확인 가능 -> console.dir(*)
  e.preventDefault();
  const username = loginInput.value;
  // classList: classList 중 하나를 사용하여 class를 추가하거나 제거 가능
  loginForm.classList.add("hidden");
  console.log(username);
  localStorage.setItem("username", username);
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove("hidden");
}

loginForm.addEventListener("submit", onLoginSubmit);

// 브라우저에서 공짜로 기억할 수 있게 해주는 기능의 API = localStorage
// 정보 저장: setItem("key", "value")
// 정보 호출: getItem("key")
// 정보 삭제: removeItem("key")
