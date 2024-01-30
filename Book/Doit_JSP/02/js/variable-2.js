// 58P
// const myNumber = 10;

// function add(a, b) {
//   return a + b;
// }

// let sum = add(10, 20);
// console.log(sum);
// let sum = 100;   // let 변수는 재선언 불가능
// myNumber = 20;   // const 변수는 재선언과 재할당 불가능
// console.log(sum);

function add(a, b) {
  return a + b;
}

let sum = add(10, 20);
document.write(`const myNumber = 10;<br>
function add(a, b) {<br>
  return a + b;<br>
}<br>
let sum = add(10, 20);와 같이 선언 한 후 <br>
그 값을 document.write로 콜링하면 return a+b에 해당하는 값 ${sum}을 확인할 수 있다.<br><br> `);

// let sum = 100;   // let 변수는 재선언 불가능, 재할당 가능
document.write(`let sum = 100으로 재선언을 시도하면,<br>
  재선언이 불가한 let의 속성에 따라 오류를 발생시켜 document를 읽어오지 못하게 되며,<br> 
  콘솔을 열어보면 다음과 같은 에러 메세지를 확인할 수 있다.<br>
  Uncaught SyntaxError: Identifier 'sum' has already been declared (at variable-2.js:9:5)<br><br>`
);
sum = 100;

document.write(`단, let으로 선언한 sum은 다음과 같이 재할당 할 수 있다.<br> sum = 100;  document.write(sum); ${sum}<br><br> `);

let sum2 = add(87, 14);
document.write(`let sum2 = add(87, 14); 정의하였으나,
document.write(sum);에서 sum2가 아닌 sum을 콜링하면<br>
그 값은 sum의 값 ${sum}이 된다.<br><br>`);

document.write(`document.write(sum2);에서 sum2를 콜링해야 그 값이 sum2의 값 ${sum2}가 된다.<br><br>`);

sum2 = add(25, 13);
// 재할당
document.write(`sum2 = add(25, 13);과 같이 재할당하고 document.write(sum2);로 콜링하면<br> 재할당 된 값 ${sum2}이 반환된다.<br><br>`);

const myNumber = 10;
document.write(`const myNumber = 10;으로 선언하고 document.write(myNumber);로 콜링하면<br> myNumber의 값 ${myNumber}이 호출된다.<br><br>`);
// myNumber = 20;   // const 변수는 재선언과 재할당 불가능
document.write(`const로 선언한 myNumber = 10;은<br> 
const myNumber = 20(재선언); 이나 myNumber = 30(재할당)과 같이<br> 
재선언과 재할당이 불가하며 오류를 발생시킨다.<br><br>
아래에서 좀 더 자세히 보면<br><br>`);


const sum3 = add(18, 21);
document.write(`const sum3 = add(18, 21); 선언하고 document.write(sum3);을 호출하면sum3의 값 ${sum3}이 표시된다.<br><br>`);
document.write(`const sum3 = 100; console.log(sum3);는<br> 
재선언이 불가한 const 속성에 따라 오류를 발생시켜 document를 읽어오지 못하게 된다.<br><br>`);
document.write(`sum3 = add(16, 24); console.log(sum3); 역시<br>
재할당이 불가한 const 속성에 따라 오류를 발생시켜 document를 읽어오지 못하게 된다.<br><br> `);

// const sum3 = 100;

// console.log(sum3);
// 구문을 살리면 재선언 불가 확인 가능
// sum3 = add(16, 24);
// console.log(sum3);
// 구문을 살리면 재할당 불가 확인 가능

