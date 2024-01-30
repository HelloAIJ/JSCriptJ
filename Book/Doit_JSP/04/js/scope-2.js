// var의 전역스코프.
var hi = "hello";

function greeting() {
  document.write(hi);
}
// 함수밖에 var로 선언된 변수는 함수안에서 호출해도 참조하는데 문제가 전혀 없다. 이를 전역변수 라고 한다.
document.write(`var hi = "hello"; //전역 변수<br><br> 
function greeting() {<br>
  document.write(hi);<br>
}<br>
greeting();<br><br>

함수밖에서 선언된 변수는 전역 변수라고 불리며 함수안에서 호출해도 참조하는데 문제가 전혀 없다.
<br><br>따라서, greeting()을 호출하면 var hi로 선언된 값 `);

greeting();
document.write(`를 뱉어 낸다.`);
