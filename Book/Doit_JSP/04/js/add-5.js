// 139P
// 즉시 실행 함수
(function (a, b) {
  let sum = a + b;
  document.write(`<p><즉시실행함수><br><span style="font-size:16px; color:black;">이름을 붙일 필요없이 선언 후 바로 실행되며 재콜링은 되지 않는다.<br></span></p>
  <p style="text-align:left; color:blue; font-size:18px;">
  (function (a, b) {<br>
    let sum = a + b;<br>
    document.write(\`함수 실행 결과 : \${sum}\`);})(100, 200);<br></p>`
    + `함수 실행 결과 : ${sum}<br><br>`);
})(100, 200);

// 선언식 함수
function add(a, b) {
  let sum = a + b;
  document.write(`<p><선언형 함수><br><span style="font-size:16px; color:black;">함수명을 가지며 별도로 해당 함수를 콜링해야 실행된다.<br></span></p>
  <p style="text-align:left; color:blue; font-size:18px;">
  function (a, b) {<br>
    let sum = a + b;<br>
    document.write(\`함수 실행 결과 : \${sum}< br>\`);<br>
  };<br> add(100, 200);<br></p>`+ `함수 실행 결과 : ${sum}<br><br>`);
}
// 함수의 기본형, 콜링하지 않으면 실행안함
add(100, 200);
// 콜링이란 ()이다