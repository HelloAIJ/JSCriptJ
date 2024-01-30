// 117P
// console.log(`안녕`)
// alert(`닫아`)
// document.write(`안녕`)

// function 함수명(){실행문}
//함수의 기본형, 선언법
// 함수명()
//함수의 호출법, 함수콜링, 이때 실행, 콜링은 내맘

// 호이스팅
// calcSum();

// const text = document.querySelector("#text");
// text.style.width = "800px";
function calcSum() {
  let sum = 0;
  let arr = [];
  for (let i = 1; i <= 10; i++) {
    arr.push(i);
    sum += i;
  }
  document.write(`Quiz1<br>`);
  document.write(arr.join("+"));
  document.write(`=${sum}, 1부터 10까지 더하면 ${sum}입니다.<br><br>`);
  // 실행문이랑 리턴값(퉤)랑 구분할 것

}
calcSum();


// 응용! 사용자에게 숫자를 받아, 1부터 그 숫자까지 더한값을 출력해보자
const number = parseInt(prompt("1부터 얼마까지 더해드릴까요?"));
function calcSum2() {
  let sum = 0;
  let arr = [];
  for (let i = 1; i <= number; i++) {
    arr.push(i);
    sum += i;
  }
  document.write(`Quiz2<br>`);
  document.write(arr.join("+"));
  document.write(`=${sum}, <br>1부터 ${number}까지 더하면 ${sum}입니다.`);
}
calcSum2();

