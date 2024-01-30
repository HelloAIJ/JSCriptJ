// 129P
// 변수 예약어를 통한 전역/지역변수 구분과
// 스코프(함수 function함수명(){}, 블록{}) 일괄정리

// 88888888888888888888888888888888888888
// var
// 88888888888888888888888888888888888888

var factor = 7;
// 전역변수

function calc() {
  var num = 5;
  // 지역변수, 함수밖으로 못나가는 값이나. return값으로는 반환 가능
  factor = 10;
  //   factor = 10; // 재할당, 전역변수로 인식
  // 실행문으로 factor 반환하기
  document.write("<br> ▶  " + factor + "(재할당했던 facter 값)<br> ");
  // return num * factor;
  // num 변수에는 접근할 수가 없으나.
  return num;
  // 함수를 콜링하면 나갈 수 있다.
}
document.write(`var factor = 7; // 전역변수<br>
function calc() {<br>
  var num = 5; // 지역변수, 함수밖으로 못나가는 값이나. return값으로는 반환 가능<br>
  factor = 10; // 전역변수, 재할당식으로 변경, 지역으로 할당({안에서 선언})했으나 전역으로 인식<br>
  document.write(factor); // 실행문으로 전역변수로 선언된 factor를 찍어보자<br>
  // return num * factor; // return num * factor;로 선언하면 num 변수에 접근할 수 없으나<br>
  return num; // return num;로 선언하면 함수콜링시 나갈 수 있음<br>
}<br>document.write(factor);<br><br>▶  `);
document.write(factor);
document.write("(var factor로 선언한 " + factor + "이 찍힘)<br><br>");
// 위에 전역변수 선언이 있었으므로 7이 반환됨
// console.log(num);
// 지역변수를 밖에서 물어보면 에러 발생 num is not defined
document.write(`이후 calc()를 콜링하면<br> 안쪽에서 선언했던 document.write(factor)가 찍혀 나옴<br>`);
calc();
// 함수콜링하고
// // console.log(factor);
document.write(`<br>`);
document.write(`밖에서 다시 한 번 'document.write(calc())'를 찍으면<br> 함수 calc() 내의 document.write(factor)값과 return 값을 뱉어낸다.<br>`);
document.write('▶ ' + calc() + '(return num으로 선언한 var num의 값을 return함)');
//88888888888888888888888888888888888888


//88888888888888888888888888888888888888
// let 사용(재할당 활용), const는 재선언/재할당 둘다 안됨으로 연습 X
//88888888888888888888888888888888888888

// let factor = 7;
// 전역변수
////-------------------- let이지만 함수스코프 적용
/* function calc() {
  let num = 5;
  // 지역변수, 함수밖으로 못나가는 값이나. return값으로는 반환 가능
  factor = 10;
  // 전역변수, 재할당식으로 변경, 지역으로 할당({안에서 선언})했으나
  // 전역으로 인식
  //  console.log(factor);
  // 실행문으로 전역변수로 선언된 factor 찍어보기
  //  return num * factor;
  // num 변수에 접근할 수 없음
  return num;
  // 함수콜링시 나갈 수 있음
} */
// => 지역변수는 스코프(범위, 영역) 밖으로 나갈 수 없음

// console.log(factor);
// console.log(num); 
// 지역변수를 밖에서 물어보면 에러 발생 num is not defined
// calc();
// 함수콜링
// console.log(calc());
// let과 var는 전역으로 선언되면 같음. 지역이어도 return으로 반환 받을 경우 같음.
//88888888888888888888888888888888888888


//88888888888888888888888888888888888888
// 블록스코프 적용
//88888888888888888888888888888888888888
// {
//   // let num = 5; // 지역
//   // factor = 10; // 전역
//   // return num; // 에러남, Illegal return statement
// }
// // 지역변수는 스코프 밖을 나갈 수 없다

// // console.log(factor);
// // console.log(num); // 에러
//88888888888888888888888888888888888888


//88888888888888888888888888888888888888
// 책 예제
//88888888888888888888888888888888888888

// const factor = 5; 
// 전역변수

// // 함수스코프
// function calc() {  
//  return num * factor;   
// // num 변수에 접근할 수 없음
// } 
// // Uncaught ReferenceError: num is not defined

// // 블록스코프
// {
//   const num = 10;
// // 여기에 선언된 num은 블록스코프 밖에 나갈 수 없다  
//   let result = calc();
//   console.log(`result : ${result} `);
// }