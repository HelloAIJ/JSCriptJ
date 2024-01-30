//134P

function addSum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
const num = 3;

document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
  function addSum(n) {<br>
    let sum = 0;<br>
    for (let i = 1; i <= n; i++) {<br>s
    sum += i;<br>
    }<br>
  return sum;<br>
  }<br>
  const num = 3;<br>
  document.write(\`1부터 \${num}까지 더하면 : \${addSum(num)}\`);</p>`);
document.write(`1부터 ${num}까지 더하면 : ${addSum(num)}`);
let num3 = 10;
const num4 = 0;
// 밖에 있으면 전역;

{
  let num2 = 5;
  // 스코프 안에 있으면 지역
  // let, const는 유효범위가 제한된다.
  // var는 상관없음
}
