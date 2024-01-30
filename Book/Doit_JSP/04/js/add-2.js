// 119P
// function sum(a, b) {
//   let result = a + b;
//   console.log(`두 수의 합은 ${result}입니다!`);
// }
// // // sum()
// sum(10, 30);

function calcSum(n) {
  let sum = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
    sum += i;
  }
  document.write(`1부터 ${n}까지 더하면 ${sum}입니다.`);
}
// n은 매개변수=파라미터
document.write(`<p><매개변수 n을 지정하여 활용하기></p>`);
calcSum(10);
document.write(`<br>`);
calcSum(35143135);
document.write(`<p><명령프롬프트로 부터 매개변수 n을 받아 활용하기></p>`);
const number = parseInt(prompt("1부터 얼마까지 더해드릴까요?"));
calcSum(number);

// number는 사용자가 입력한 값, 이것을 함수의 인수=인자로 넣고있다. 함수는 이 인수를 받아서 n에 대입하여 계산을 돌린다.

// a, b 는 파라미터 또는 매개변수라고 불림

document.write(`<p><매개변수 a, b 활용하기></p>`);

function sum(a, b) {
  let result = a + b;
  document.write(`두 수의 합: ${result}`);
}
sum(100, 54645846);
//54645946
// 100, 54645846는 인수, 인자라고 불림
document.write(`<br>`);
sum(100);
// NaN
document.write(`<br>`);
sum();
// NaN 
document.write(`<br>`);

document.write(`<p>매개변수는 함수에 들어가면서 인수로 작용한다.</p>`);


