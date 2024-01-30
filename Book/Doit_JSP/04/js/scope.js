//132P

function addSum(n) {
  var sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// 변수에는 전역과 지역이 있다.
// var로 선언된 변수는 유효범위 함수스코프function(){} 안에서이다.

// let, const로 선언한 변수도 전역과 지역이 있다.
// 하지만 이들은 var보다 더 엄격한 소규로 유효범위가 설정된다. 블록스코프{}.

var num = 3;

document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
  function addSum(n) {<br>
    var sum = 0;<br>
    for (var i = 1; i <= n; i++) {<br>s
    sum += i;<br>
    }<br>
  return sum;<br>
  }<br>
  var num = 3;<br>
  document.write(\`1부터 \${num}까지 더하면 : \${addSum(num)}\`);</p>`);
document.write(`1부터 ${num}까지 더하면 : ${addSum(num)}`);
