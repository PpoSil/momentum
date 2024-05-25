const clock = document.querySelector("#clock");

function getClock() {
  // new 키워드 -> 생성자 함수를 호출하여 새로운 객체를 생성
  // 생성자 함수 사용하는 이유: 나만의 객체가 필요하고, 생성된 객체의 데이터에 대한 다양한 기능이 필요할 때 사용
  // 생성된 Date 객체(객체 : 나만의 데이터 형태)에는 다양한 메서드가 제공되어 날짜와 시간 정보를 가져오거나 조작 가능
  const date = new Date(); // 이 객체에는 현재 날짜와 시간 정보가 저장
  // 기본적으로 시간들은 num이기에 pad함수(str만 사용 가능)를 사용하고 싶으면 str로 변환하는 과정 필요
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// interval: "매번" 일어나야 하는 무언가
// setInterval(실행하고자 하는 func, func를 호출하는 시간 간격);  (반복 o)
// setInterval(sayHello, 5000);

// setTimeout(실행하고자 하는 func, func를 호출하는 시간 간격); (반복 x)
// setTimeout(getClock, 1000);

// setTimeout(호출 반복 x) vs setInterval(호출 반복 o)

// 즉시 호출
getClock();
// 즉시 호출 후 1초마다 호출
setInterval(getClock, 1000);

// @.padStart(*, "0"): @개의 길이를 가진 문자열이 있을 때, *개의 길이를 가지도록 @의 앞에 0을 붙여주세요~
// @.padEnd(*, "0"): @개의 길이를 가진 문자열이 있을 때, *개의 길이를 가지도록 @의 뒤에 0을 붙여주세요~
