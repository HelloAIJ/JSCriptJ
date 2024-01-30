// 151P
// greeting 함수를 선언한 후 콜백 함수로 사용
function greeting() {
  console.log("안녕하세요?");
}

// // setInterval(콜백함수명, 시간);
setInterval(greeting, 1000);
// // 1000미리초 1초
document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
function greeting() {<br>
  console.log("안녕하세요?");<br>
}<br>
setInterval(greeting, 1000);</p><br>
해당 콘솔을 열어보면 1초마다 안녕하세요? 가 찍히는데.<br>
 같은 값이라. ⓝ 안녕하세요? 가 된다.<br>
 <p style ="text-align:left; font-size:16px; color:black;">ex)<br>
 ⑤ 안녕하세요?(원안에 숫자는 1초 마다 증가)<br>
`);
// 직접 함수를 선언하면서 실행
// setInterval(function(){
//   실행문
// },2000);

// 화살표함수로 바꾸면?

// setInterval(() => {
//   console.log("안녕하세요?");
// }, 1000);
// // setInterval( 파라미터 => 리턴값, 시간)

// checker 생성
function cheker() {
  console.log("check");
}

// setInterval(콜백함수명, 시간);
setInterval(cheker, 5000);

document.write(`<p style ="text-align:left; font-size:18px; color:blue;">
function cheker() {<br>
  console.log("check");<br>
}<br>
setInterval(cheker, 5000);</p><br>
이에 위와 같이 체커를 생성하면, ⑤ 안녕하세요?를 최대치로 5초마다 check가 찍힌다.
<p style ="text-align:left; font-size:16px; color:black;">ex)<br>
   ⑤ 안녕하세요?(원안에 숫자는 1초 마다 증가하여 5까지 늘어남)<br>
  check<br>  
  ⑤ 안녕하세요?<br>
  check<br>
  `);

// 직접 함수를 선언하면서 실행
// setInterval(function(){
//   실행문
// },2000);

// 화살표함수로 바꾸면?
// setInterval(() => {
//   console.log("check");
// }, 5000);
// setInterval( 파라미터 => 리턴값, 시간)
