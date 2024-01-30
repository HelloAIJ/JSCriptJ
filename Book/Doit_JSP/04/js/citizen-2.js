//146P
function hello() {
  return "안녕하세요?";
}
function bye() {
  return "안녕히 가세요.";
}

function userCheck(name, fn) {
  document.write(`▶ ${name}님 `, fn(), ` : \${fn}은 ${fn}<br>`);
  // document.write(`${name}님 `, fn() + ` : \${fn}은 ${fn}<br>`);
  // 파라미터 2개를 받아서 name은 변수로, fn은 함수로 실행해라 

}
document.write(`<p style="text-align:left; font-size:16px;color:blue;">
function hello() {<br>
  return "안녕하세요?";<br>
}<br>
function bye() {<br>
  return "안녕히 가세요.";<br>
}<br>

function userCheck(name, fn) {<br>
  document.write(\`\${name}님 \`, fn() , \`$\{fn}\` );<br>
  // document.write(\`\${name}님 \`, fn() + \`$\{fn}\` );<br>
  // 파라미터 2개를 받아서 name은 변수로, fn은 함수로 실행해라.<br>
  // 추가문은 , 또는 +로 구현가능<br> 
}<br>
userCheck("홍길동", hello);<br>
// 홍길동님 안녕하세요?<br>
userCheck("도레미", bye);<br>
// 도레미님 안녕히 가세요.
</p>`+ `결과값은 다음과 같다.<br><br>⇓<br><br>`);
userCheck("홍길동", hello);
// 홍길동 안녕하세요?
userCheck("도레미", bye);
// 도레미 안녕히 가세요.