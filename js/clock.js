const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// interval: "매번" 일어나야 하는 무언가
// setInterval(실행하고자 하는 func, func를 호출하는 시간 간격);  (반복 o)
// setInterval(sayHello, 5000);

// setTimeout(실행하고자 하는 func, func를 호출하는 시간 간격); (반복 x)
// setTimeout(getClock, 1000);

// 즉시 호출
getClock();
// 즉시 호출 후 1초마다 호출
setInterval(getClock, 1000);

// setTimeout(호출 반복 x) vs setInterval(호출 반복 o)
