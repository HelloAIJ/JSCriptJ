//145
let sum = (a, b) => a + b;
// 화살표 함수
// let sum = add; // 에러남
sum(2, 10);
// 변수(인자1, 인자2), 익명함수의 옳은 콜링

function add(a, b) {
  return a + b;
}

document.write(`<p style="text-align:left; font-size:16px;color:blue;">
let sum = (a, b) => a + b;<br>
// let sum = add;<br> 
// 에러남<br>
sum(2, 10);<br>
// 변수(인자1, 인자2), 익명함수의 옳은 콜링<br>
function add(a, b) {<br>
  return a + b;<br>
}<br>`+ `document.write(add)는</p>▶  ` + add + `<br>`);
document.write(`<p style="text-align:left; font-size:16px;color:blue;">
documetn.write(sum(2, 10))</p>▶  (a=2, b=10 일 때, function add(a, b)가 return a + b 이므로) 값은 `+ sum(2, 10) + `가 된다.`);